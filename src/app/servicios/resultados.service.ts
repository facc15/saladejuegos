import { Jugador } from './../interfaces/jugador';
import { User } from './../interfaces/user';
import { AuthService } from 'src/app/servicios/auth.service';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { addDoc, collection, doc, updateDoc } from 'firebase/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResultadosService {
  private user: any={};

  constructor(private afs: AngularFirestore,private afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(user=>{
      if(!user)
      {
        return ;
      }
     
        this.user.displayName= user.displayName;
        this.user.email= user.email;
        this.user.photoUrl= user.photoURL;
        this.user.uid= user.uid;

      });

   }

  async guardarResultado(juego: string,puntaje: number)
  {
    try {
      const docRef = await addDoc(collection(this.afs.firestore,juego), {
        puntaje: puntaje,
        correo: this.user.email,
        nombre: this.user.displayName,
        uid: this.user.uid,
        fecha: new Date(),
      });
      console.log("Documento escrito en colección: ", docRef.id);
      this.user.id=docRef.id;
    } catch (e) {
      console.error("Error al agregar document: ", e);

    }
  }
  async actualizarResultado(juego: string, puntaje: number) {
    
    const placeRef = doc(this.afs.firestore,juego,this.user.id);
    await updateDoc(placeRef, { puntaje: puntaje } ).then(res=>{
    });
  }

  
  async guardarResultadoPokemon(juego: string,victorias: number,derrotas: number)
  {
   
      try {
        const docRef = await addDoc(collection(this.afs.firestore,juego), {
          victorias: victorias,
          derrotas: derrotas,
          correo: this.user.email,
          nombre: this.user.displayName,
          uid: this.user.uid,
          fecha: new Date(),
        });
        console.log("Documento escrito en colección: ", docRef.id);
        this.user.id=docRef.id;
      } catch (e) {
        console.error("Error al agregar document: ", e);
  
      }
    
  }

  async actualizarResultadoPokemon(gano: boolean,juego: string, puntaje:number) {
    
    if(gano)
    {
      const placeRef = doc(this.afs.firestore,juego,this.user.id);
    await updateDoc(placeRef, { victorias: puntaje } );
    }else
    {
      const placeRef = doc(this.afs.firestore,juego,this.user.id);
      await updateDoc(placeRef, { derrotas: puntaje } );
    }
    
    
  }
  traerResultados(juego: string): Observable<Jugador[]>
  {
    let placeRef=collection(this.afs.firestore,juego);
    return collectionData(placeRef,{idField:'id'}) as Observable<Jugador[]>;

  }


}
