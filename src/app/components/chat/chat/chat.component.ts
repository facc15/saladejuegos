import { ChatService } from './../../../servicios/chat.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs/internal/Observable';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  public mensajes!: Observable<any[]>;
  public mensaje!: string;
  public elemento!: any;

  constructor(public chatService: ChatService) {
    this.chatService.cargarMensajes()
    .subscribe(()=>{
      setTimeout(() => {
        //para que siempre el chat se abra desde abajo.
        this.elemento.scrollTop= this.elemento.scrollHeight;
      }, 20);

    });

   }

  ngOnInit(): void {
    this.elemento=document.getElementById('msg');
  }

  enviarMensaje()
  {
    if(this.mensaje.length ===0 )
    {
      return;
    }
    this.chatService.agregarMensaje(this.mensaje)
                    .then( ()=>this.mensaje="")
                    .catch((error)=>console.log("Error al enviar", error) );

  }

}
