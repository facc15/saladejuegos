import { ToastrService } from 'ngx-toastr';
import { Usuario } from './../../../clases/usuario';
import { AuthService } from './../../../servicios/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() eventoIrARegistro = new EventEmitter<boolean>();

  public cargarUsuario!: FormGroup;
  public loguearse!: boolean;
  public usuario!: Usuario;
  public spinner!: boolean;


  constructor(private router: Router, private auth: AuthService,private fb :FormBuilder ,private toastr: ToastrService) {
    this.usuario=new Usuario();
    this.spinner=false;
    this.cargarUsuario=this.fb.group({
      email:['', [Validators.required, Validators.email]],
      pass:['', [Validators.required, Validators.minLength(6)]],
      pass2:['', [Validators.required, Validators.minLength(6)]],
    });
   }


  ngOnInit(): void {
  }


  loguear(miUsuario: Usuario) {

    setTimeout(() => {
      this.auth.loguear(miUsuario.correo,miUsuario.pass).then((userC)=> {

        this.loguearse=false;
        setTimeout(() => {
          this.spinner=false;
          this.router.navigateByUrl('home');
        }, 500);


        }).catch(error=>{
          this.spinner=false;
        });
    }, 1000);


}

  loguearConGoogle()
  {
    this.auth.loguearGoogle();
  }


  enviarLogin() {
    this.spinner=true;
    this.usuario.correo=this.cargarUsuario.value.email;
    this.usuario.pass=this.cargarUsuario.value.pass;



      this.loguear(this.usuario);

  }

  irARegistro(){
    this.eventoIrARegistro.emit(true);
  }


  guardarColeccion()
  {
    this.auth.guardarColeccion(this.usuario.correo,this.usuario.pass);
  }





}
