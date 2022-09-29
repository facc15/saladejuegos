import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore} from '@angular/fire/compat/firestore';
import * as firebase from 'firebase/app';
import { getAuth, getIdToken, onAuthStateChanged, User, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { first } from 'rxjs/operators';
//firestore
import { collection, addDoc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {


  public miUser :any={};
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

  estadoLog()
  {

  }

  async guardarColeccion(correo: string, pass: string)
  {
    try {
      const docRef = await addDoc(collection(this.afs.firestore,"Usuarios"), {
        correo: correo,
        pass: pass,
        fecha: new Date(),
      });
      console.log("Documento escrito en colección: ", docRef.id);

    } catch (e) {
      console.error("Error al agregar document: ", e);

    }
  }

  loguearGoogle()
  {
    this.afAuth.signInWithPopup(new GoogleAuthProvider).then(()=>{
    console.log("Se logueo bien con google");
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
      console.log(user);
    }).catch((error)=>{console.log(error)
      this.toastr.error(this.firebaseError(error.code),'Error',{
        timeOut: 1500,
        progressAnimation: 'decreasing',
        positionClass: 'toast-bottom-center'
      });});

    return resultado;

}

async getIdToken()
{
return await this.afAuth.idTokenResult;
}




  async registrar(email:string, password:string){

    try{

      const resultado= await this.afAuth.createUserWithEmailAndPassword(email,password).then(async (user)=>{
        console.log("user: "+user);
        const coleccion=await this.guardarColeccion(email,password);
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

  /*
  async loginWithGoogle()
  {
    try {
      let provider=new firebase.default.auth.GoogleAuthProvider()

      const result= this.afAuth.signInWithPopup(provider);
      return result;
    } catch (error) {
      console.log(error);
    }
    return;
  }*/

  getUserLog(){
    return this.afAuth.authState.pipe(first()).toPromise();
  }
}
