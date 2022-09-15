import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Usuario } from './../../clases/usuario';
import { Component, OnInit, Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Output() newItemEvent = new EventEmitter<Usuario>();
  @Input() loguearse!: boolean;
  public usuario!: Usuario;
  public pass2!: string;

  cargarUsuario!: FormGroup;


  public expRegEmail: any = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
  public expRegPass: any= /^(?=.*[a-z])(?=.*\d)[A-Za-z\d#$@!%&*?]{6,12}$/;


  constructor(private router: Router, private fb: FormBuilder, private toastr: ToastrService) {
    this.usuario=new Usuario();
    this.cargarUsuario=this.fb.group({
      email:['', [Validators.required, Validators.email]],
      pass:['', [Validators.required, Validators.minLength(6)]],
      pass2:['', [Validators.required, Validators.minLength(6)]],
    });

   }

  ngOnInit(): void {
  }






enviarRegistro() {
  this.usuario.correo=this.cargarUsuario.value.email;
  this.usuario.pass=this.cargarUsuario.value.pass;
  this.usuario.pass2= this.cargarUsuario.value.pass2;

  if(this.usuario.pass!=this.usuario.pass2)
  {
    this.toastr.error("Las contraseñas deben ser iguales","Error",{
      timeOut: 2000,
      progressAnimation: 'decreasing',
      positionClass: 'toast-bottom-center'
    });
    return;
  }

  setTimeout(() => {

    this.newItemEvent.emit(this.usuario);
  }, 4000);


  /*
 this.validarMail();
 this.validarPass();
 if(this.validatedEmail && this.validatedPassword)
 {

 }*/

}



enviarLogin() {
  this.usuario.correo=this.cargarUsuario.value.email;
  this.usuario.pass=this.cargarUsuario.value.pass;

  setTimeout(() => {

    this.newItemEvent.emit(this.usuario);
  }, 2000);



}

irAHome()
{
  this.router.navigate(['/','home']);
}

limpiar()
{


}




}
