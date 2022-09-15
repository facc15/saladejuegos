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
  public loguear: boolean;
  public registrar: boolean;
  public logueado: boolean;

  public user:any;
  public user$: Observable<any> =this.auth.afAuth.user;


  public spinner: boolean=false;


  constructor(private router: Router, public auth: AuthService, public toastr: ToastrService, public afAuth : AngularFireAuth)
{
  this.loguear=true;
  this.registrar=false;
  this.logueado=false;

}

async ngOnInit() {
/*
this.afAuth.currentUser.then(user=>{
  alert(this.afAuth.user);

  this.logueado=true;

})*/

this.user = await this.auth.getUserLog();

    //me devuelve objeto user

    if(this.user)
    {
      this.logueado=true;

    }



/*
if(this.afAuth.currentUser.!=null)
{
  this.logueado=true;
}else
{

}*/

}



desloguear()
{
  this.auth.desloguear();
  this.logueado=false;
  this.loguear=true;
  this.registrar=false;
}

  irAQuienSoy()
  {
    this.router.navigate(['/','quiensoy']);
  }

irASalaDeJuegos()
{

}

  irALogin()
  {
    this.loguear=true;
    this.registrar=false;
  }

  irARegistro()
  {
    this.loguear=false;
    this.registrar=true;
  }

  irAError()
  {
    this.router.navigate(['/','error']);
  }

  estaRegistrado(newItem: string)
  {

    if(this.auth.miUser.email)
    {
      this.logueado=true;
    }

  }

  estaLogueado(newItem: string) {
    if(this.auth.miUser.email)
    {
      this.logueado=true;
    }




  }

}
