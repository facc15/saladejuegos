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

  @Output() newItemEvent = new EventEmitter<Usuario>();

  public cargarUsuario!: FormGroup;
  public loguearse!: boolean;
  public usuario!: Usuario;

  public expRegEmail: any = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
  public expRegPass: any= /^(?=.*[a-z])(?=.*\d)[A-Za-z\d#$@!%&*?]{6,12}$/;


  loguear(miUsuario: Usuario) {
      this.auth.loguear(miUsuario.correo,miUsuario.pass).then((userC)=> {

      this.loguearse=false;
        this.newItemEvent.emit(this.usuario);
      this.router.navigateByUrl('home');
      }).catch(error=>{
        //this.inter.informeError('Usuario registrado');
        alert("mal");

      });
  }

  constructor(private router: Router, private auth: AuthService,private fb :FormBuilder ,private toastr: ToastrService) {
    this.usuario=new Usuario();
    this.cargarUsuario=this.fb.group({
      email:['', [Validators.required, Validators.email]],
      pass:['', [Validators.required, Validators.minLength(6)]],
      pass2:['', [Validators.required, Validators.minLength(6)]],
    });



   }

  ngOnInit(): void {
  }

  loguearConGoogle()
  {
    this.auth.loguearGoogle();
  }


    /*
   this.validarMail();
   this.validarPass();
   if(this.validatedEmail && this.validatedPassword)
   {

   }*/





  enviarLogin() {
    this.usuario.correo=this.cargarUsuario.value.email;
    this.usuario.pass=this.cargarUsuario.value.pass;

    setTimeout(() => {

      this.loguear(this.usuario);
    }, 2000);



  }



  guardarColeccion()
  {
    this.auth.guardarColeccion(this.usuario.correo,this.usuario.pass);
  }





}
