import { ToastrService } from 'ngx-toastr';
import { Usuario } from './../../clases/usuario';
import { AuthService } from './../../servicios/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() newItemEvent = new EventEmitter<string>();



  public usuario: Usuario;
  public loguearse: boolean;


  loguear(miUsuario: Usuario) {
      this.auth.loguear(miUsuario.correo,miUsuario.pass).then((userC)=> {

      this.loguearse=false;
        this.newItemEvent.emit('');
      this.router.navigateByUrl('home');
      }).catch(error=>{
        //this.inter.informeError('Usuario registrado');
        alert("mal");

      });
  }

  constructor(private router: Router, private auth: AuthService, private toastr: ToastrService) {
    this.usuario=new Usuario();
    this.loguearse=true;


   }

  ngOnInit(): void {
  }


  guardarColeccion()
  {
    this.auth.guardarColeccion(this.usuario.correo,this.usuario.pass);
  }





}
