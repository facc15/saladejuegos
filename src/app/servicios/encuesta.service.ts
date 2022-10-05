import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { addDoc, collection } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class EncuestaService {
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

  async guardarEncuesta(encuestado: any)
  {
    try {
      const docRef = await addDoc(collection(this.afs.firestore,'Encuesta'), {
        correo: this.user.email,
        nombreDisplay: this.user.displayName,
        nombre: encuestado.nombre,
        apellido:encuestado.apellido,
        edad: encuestado.edad,
        numero:encuestado.numero,
        pregunta1:encuestado.pregunta1,
        pregunta2:encuestado.pregunta2,
        pregunta3:encuestado.pregunta3,
        uid: this.user.uid,
        fecha: new Date(),
      });
      console.log("Documento escrito en colección: ", docRef.id);
      this.user.id=docRef.id;
    } catch (e) {
      console.error("Error al agregar document: ", e);

    }
  }
}
