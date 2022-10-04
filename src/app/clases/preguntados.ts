export class Preguntados {

  pregunta: string;
  opcion1: string;
  opcion2: string;
  opcion3: string;
  opcion4: string;
  correcta: number;
  path: string;

  constructor(preg: string,o1: string,o2: string, o3: string,o4: string,corr: number,path:string)
  {
    this.pregunta=preg;
    this.opcion1=o1;
    this.opcion2=o2;
    this.opcion3=o3;
    this.opcion4=o4;
    this.correcta=corr;
    this.path=path;

  }
}
