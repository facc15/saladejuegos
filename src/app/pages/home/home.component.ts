import { ToastrService } from 'ngx-toastr';
import { Usuario } from './../../clases/usuario';
import { AuthService } from 'src/app/servicios/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs/internal/Observable';

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

  public user:any;
  public user$: Observable<any> =this.auth.afAuth.user;


  public spinner: boolean=false;


  constructor(private router: Router, public auth: AuthService, public toastr: ToastrService, public afAuth : AngularFireAuth)
{
this.chatActivo=false;

}

async ngOnInit() {
    this.user = await this.auth.getUserLog();
    this.registrar=false;
    if(!this.user)
    {
      this.loguear=true;
    }else
    {
      this.loguear=false;

    }
}



desloguear()
{
  this.auth.desloguear();
  this.loguear=true;
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

  irAError()
  {
    this.router.navigate(['/','error']);
  }

  estaRegistrado(newItem: Usuario)
  {
  }

  estaLogueado(newItem: Usuario) {
  }

}
