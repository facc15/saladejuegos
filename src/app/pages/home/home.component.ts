import { Usuario } from 'src/app/clases/usuario';
import { ToastrService } from 'ngx-toastr';

import { AuthService } from 'src/app/servicios/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs/internal/Observable';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public miUsuario!: any;
  public loguear!: boolean;
  public registrar!: boolean;
  public chatActivo!: boolean;

  public admin!:boolean;
  public user:any;
  public user$: Observable<any> =this.auth.afAuth.user;
  public usuario$!: Observable<Usuario[]>;


  public spinner: boolean=false;


  constructor(private router: Router, public auth: AuthService, public toastr: ToastrService, public afAuth : AngularFireAuth)
{
this.chatActivo=false;

}

async ngOnInit() {

    this.afAuth.authState.subscribe(user=>{
      if(!user)
      {
        this.loguear=true;
        return;
      }
      this.loguear=false;
        this.auth.traerUsuarios().subscribe(res=>{
          this.admin=false;
          for(let item of res)
          {
            if(item.uid==user.uid)
            {
              if(item.perfil=="administrador")
              {
                this.admin=true;
                break;
              }
            }
          }
        });

      });

}

desloguear()
{
  this.auth.desloguear();
  this.loguear=true;
  this.admin=false;
  this.registrar=false;
}

  irAQuienSoy()
  {
    this.router.navigateByUrl('pages/quien-soy');
  }

  irAChat()
  {
    if(!this.chatActivo)
    this.chatActivo=true;
    else
    this.chatActivo=false;
  }

irASalaDeJuegos()
{
  this.router.navigateByUrl('pages/juegos/lista');
}


  irARegistro(event: boolean)
  {
    this.registrar=event;
    this.loguear=false;

  }
  irALogin(event: boolean)
  {
    this.loguear=event;
    this.registrar=false;
  }

  irAResultadosDeLaEncuesta()
  {
    this.router.navigateByUrl('pages/respuestas-encuesta');
  }

}
