import { ToastrService } from 'ngx-toastr';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/clases/usuario';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  public loguearse: boolean=false;
  @Output() eventoRegistro = new EventEmitter<string>();

  registrar(miUsuario: Usuario) {
    this.auth.registrar(miUsuario.correo,miUsuario.pass).then((userC)=> {
      //this.inter.informeExito('Se registrÃ³ satisfactoriamente!!');
      setTimeout(() => {

      }, 2000);
      this.toastr.success('El usuario se registró satistactoriamente', 'Exito',{
        timeOut: 2000,
        progressAnimation: 'increasing',
        positionClass: 'toast-top-center'
        });
      this.eventoRegistro.emit('');
      this.router.navigateByUrl('home');
      }).catch(error=>{
        //this.inter.informeError('Usuario registrado');
        alert("mal");

      });
  }

  constructor(private router: Router, private auth: AuthService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

}
