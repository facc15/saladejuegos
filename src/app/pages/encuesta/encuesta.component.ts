import { Router } from '@angular/router';
import { Encuestado } from './../../interfaces/encuestado';
import { EncuestaService } from './../../servicios/encuesta.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.css']
})
export class EncuestaComponent implements OnInit {

  public form: FormGroup;
  public juegos: string[];
  public juegosAAgregar: string[];
  public encuesta: boolean;
  public pregunta1: any;
  public pregunta2: any;
  public pregunta3: any;

  public encuestado: any;

  constructor(private formBuilder: FormBuilder, private encuestaService: EncuestaService,private router: Router,private toastr: ToastrService) {
    this.form=this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido:['',Validators.required],
      edad: ['',[Validators.required,Validators.compose([Validators.min(18),Validators.max(99)])]],
      numero: ['',[Validators.required,Validators.maxLength(10),Validators.pattern(/^[1-9]+$/)]],
    });
    this.encuesta=false;
    this.juegos=['Ahorcado','Mayor o menor','Preguntados del fútbol','Pokemón'];
    this.juegosAAgregar=['Truco','Ajedrez','Monopoly','Adivina quién'];

    this.encuestado= [];
  }

  ngOnInit(): void {
  }

  enviar()
  {
    this.encuestado.nombre=this.form.value.nombre;
    this.encuestado.apellido= this.form.value.apellido;
    this.encuestado.edad= this.form.value.edad;
    this.encuestado.numero=this.form.value.numero;

    this.encuesta=true;
  }

  capturarSeleccion(event: any){
this.encuestado.pregunta1= event.target.value;
}

capturarRadio(event: any)
{
this.encuestado.pregunta2=event.target.value;
console.log(event);

}

capturarSwitch(event: any)
{
console.log(event);
}


confirmar()
{

  this.toastr.success('Gracias por participar, vuelvas pronto!', 'Exito',{
    timeOut: 900,
    progressAnimation: 'increasing',
    positionClass: 'toast-top-center'
    });

    setTimeout(() => {
      this.encuestaService.guardarEncuesta(this.encuestado);
      this.router.navigateByUrl('pages/juegos/lista');
    }, 1200);

}




}
