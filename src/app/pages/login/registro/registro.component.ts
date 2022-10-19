import { ToastrService } from 'ngx-toastr';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/clases/usuario';
import { AuthService } from 'src/app/servicios/auth.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  @Output() eventoIrALogin = new EventEmitter<boolean>();
  public cargarUsuario!: FormGroup;
  public usuario!: Usuario;
  public spinner: boolean=false;

  constructor(private router: Router, private auth: AuthService, private toastr: ToastrService, private fb: FormBuilder) {
    this.usuario=new Usuario();
    this.cargarUsuario=this.fb.group({
      email:['', [Validators.required, Validators.email]],
      pass:['', [Validators.required, Validators.minLength(6)]],
      pass2:['', [Validators.required, Validators.minLength(6)]],
    });
   }


  ngOnInit(): void {
  }

  registrar(miUsuario: Usuario) {

    setTimeout(() => {
      this.auth.registrar(miUsuario).then((userC)=> {
        //this.inter.informeExito('Se registrÃ³ satisfactoriamente!!');
        this.spinner=false;
        this.router.navigateByUrl('home');
        }).catch(error=>{
          //this.inter.informeError('Usuario registrado');
          this.spinner=false;
        });
    }, 1000);



  }

  irALogin(){
    this.eventoIrALogin.emit(true);
  }


  enviarRegistro() {
    this.spinner=true;
    this.usuario.correo=this.cargarUsuario.value.email;
    this.usuario.pass=this.cargarUsuario.value.pass;
    this.usuario.pass2= this.cargarUsuario.value.pass2;
    this.usuario.perfil='invitado';

    if(this.usuario.pass!=this.usuario.pass2)
    {
      this.toastr.error("Las contraseÃ±as deben ser iguales","Error",{
        timeOut: 2000,
        progressAnimation: 'decreasing',
        positionClass: 'toast-bottom-center'
      });
      this.spinner=false;
      return;
    }

    setTimeout(() => {

      this.registrar(this.usuario);
    }, 600);

  }
}
