export class Pokemon {

  public nombre: string;
  public vida: number;
  public movimiento1: Movimiento;
  public movimiento2: Movimiento;
  public movimiento3: Movimiento;
  public movimiento4: Movimiento;
  public path!: string;


  constructor(nombre: string, vida: number, mov1: Movimiento,mov2: Movimiento,mov3: Movimiento,mov4: Movimiento)
  {
   this.nombre=nombre;
   this.vida=vida;
   this.movimiento1=mov1;
   this.movimiento2=mov2;
   this.movimiento3=mov3;
   this.movimiento4=mov4;
  }
}

export class Movimiento{
  public nombre: string;
  public poder:number;

  constructor(nombre: string, poder: number) {
    this.nombre=nombre;
    this.poder=poder;
  }
}
