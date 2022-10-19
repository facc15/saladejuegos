import { Usuario } from 'src/app/clases/usuario';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore} from '@angular/fire/compat/firestore';
import * as firebase from 'firebase/app';
import { getAuth, getIdToken, onAuthStateChanged, User, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { first } from 'rxjs/operators';
//firestore
import { collection, addDoc, doc, getDoc, query, where, getDocs } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { collectionData } from '@angular/fire/firestore';
import { Observable, map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {


  public miUser :any={};
  public doc: any;
  public usuarios!: Usuario[];
  public token !: string;

  constructor(private router: Router,private afs:AngularFirestore, public afAuth: AngularFireAuth, private toastr: ToastrService) {

    this.afAuth.authState.subscribe(u=>{
      console.log("estado:" ,u);



      if(!u)
      {
        return;
      }

      this.miUser.name=u?.displayName;
      this.miUser.id=u?.uid;
      this.miUser.email= u?.email;
    })
  }



  loguearGoogle()
  {
    this.afAuth.signInWithPopup(new GoogleAuthProvider).then((algo)=>{
    console.log("Se logueo bien con google");
    console.log(algo);
    this.router.navigateByUrl('home');
    }).catch((error)=>{console.log(error)});
  }



  async loguear(email:string, password:string){

    const resultado= await this.afAuth.signInWithEmailAndPassword(email,password).then((user)=>{

      this.toastr.success('El usuario se logueó satistactoriamente', 'Exito',{
        timeOut: 1500,
        progressAnimation: 'increasing',
        positionClass: 'toast-top-center'
        });
    }).catch((error)=>{console.log(error)
      this.toastr.error(this.firebaseError(error.code),'Error',{
        timeOut: 1500,
        progressAnimation: 'decreasing',
        positionClass: 'toast-bottom-center'
      });});

    return resultado;

}


  async registrar(usuario: Usuario){

    try{

      const resultado= await this.afAuth.createUserWithEmailAndPassword(usuario.correo,usuario.pass).then(async (user)=>{
        console.log("user: "+user);
        usuario.uid= user.user?.uid;
        const coleccion=await this.guardarColeccion(usuario);
        this.toastr.success('El usuario se registró satistactoriamente', 'Exito',{
          timeOut: 1000,
          progressAnimation: 'increasing',
          positionClass: 'toast-top-center'
          });
      }).catch((error)=>{console.log(error)
      this.toastr.error(this.firebaseError(error.code),'Error',{
        timeOut: 2000,
        progressAnimation: 'decreasing',
        positionClass: 'toast-bottom-center'
      });

      });

    return resultado;

    }catch(error){
      return "error";
    }
    return "";
  }

  async guardarColeccion(usuario: Usuario)
  {
    try {
      const docRef = await addDoc(collection(this.afs.firestore,"Usuarios"), {
        uid: usuario.uid,
        correo: usuario.correo,
        pass: usuario.pass,
        fecha: new Date(),
        perfil: usuario.perfil,
      });
      console.log("Documento escrito en colección: ", docRef.id);

    } catch (e) {
      console.error("Error al agregar document: ", e);

    }
  }


  traerUsuarios(): Observable<Usuario[]>
  {
    let placeRef=collection(this.afs.firestore,"Usuarios");
    return collectionData(placeRef,{idField:'id'}) as Observable<Usuario[]>;

  }

  async traerUsuario(id: string)
  {
    const q= query(collection(this.afs.firestore,'Usuarios'), where('uid','==',id));
    const querySnapshot = await getDocs(q);

    const docu= await querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      //console.log(doc.id, " => ", doc.data());
    this.doc= doc.data();
    });

    return this.doc;
  }


  firebaseError(code: string)
  {
    switch(code)
    {
        case 'auth/email-already-in-use':
          return 'El usuario ya se encuentra registrado';
        case 'auth/weak-password':
          return 'La contraseña debe ser mínimo de 6 caracteres';
        case 'auth/invalid-email':
          return 'El correo es inválido';
        case 'auth/wrong-password':
        return 'La contraseña es incorrecta';
        case 'auth/user-not-found':
          return 'El usuario no se encuentra registado';
        default:
          return 'Error desconocido';

    }

  }


  async desloguear(){
    try{
      this.miUser={};
      await this.afAuth.signOut();
    }catch(error){
          console.log(error);
          }

  }



  getUserLog(){
    return this.afAuth.authState.pipe(first()).toPromise();
  }
}
