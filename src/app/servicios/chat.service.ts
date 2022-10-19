import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Mensaje } from './../interfaces/mensaje';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  public itemsCollections!: AngularFirestoreCollection<Mensaje>;
  public mensajes: Mensaje[]=[];
  public usuario: any = {};
  constructor(private afs: AngularFirestore, private afAuth: AngularFireAuth) {
this.afAuth.authState.subscribe(user=>{
if(!user)
{
  return ;
}
this.usuario.nombre= user.displayName;

this.usuario.uid= user.uid;
if(user.displayName==null)
{
  this.usuario.nombre= user.email;
}
});
   }

   cargarMensajes()
   {
                                              //le hago una query a firebase por fecha y me traigo los ultimos.
    this.itemsCollections= this.afs.collection<Mensaje>('Mensajes', ref=>ref.orderBy('fecha','desc')
                            //le doy un limite que me traiga 8 mensajes.
                            .limit(8));

    return this.itemsCollections.valueChanges()
                                 .pipe(map((mensajes:Mensaje[])=>{
                                  this.mensajes=[];
                                  for(let mensaje of mensajes)
                                  {
                                    //insertar en la primer posición siempre.
                                      this.mensajes.unshift(mensaje);
                                  }

                                  return this.mensajes;
                                }));
   }

   agregarMensaje(texto: string)
   {
    let mensaje: Mensaje={
      nombre: this.usuario.nombre,
      mensaje: texto,
      uid: this.usuario.uid,
      fecha: new Date().getTime(),
      hora: new Date().getHours()+':'+new Date().getMinutes()
    };

    return this.itemsCollections.add(mensaje);
   }


}
