"use strict";(self.webpackChunksaladejuegos=self.webpackChunksaladejuegos||[]).push([[430],{6430:(T,p,i)=>{i.r(p),i.d(p,{MayorMenorModule:()=>C});var g=i(3123),c=i(6895);class e{constructor(a,s){this.valor=a,this.path=s}}var t=i(4650),m=i(3802),u=i(7001),h=i(1447);function l(o,a){if(1&o){const s=t.EpF();t.TgZ(0,"div",6)(1,"p",7)(2,"strong"),t._uU(3,"Solo tienes 10 intentos"),t.qZA()(),t._UZ(4,"br")(5,"br")(6,"br")(7,"br")(8,"br")(9,"br")(10,"br"),t.TgZ(11,"button",8),t.NdJ("click",function(){t.CHM(s);const n=t.oxw();return t.KtG(n.empezarJuego())}),t._uU(12,"Jugar"),t.qZA(),t._UZ(13,"br")(14,"br")(15,"br"),t.TgZ(16,"button",9),t._uU(17,"Volver"),t.qZA()()}}function d(o,a){if(1&o){const s=t.EpF();t.TgZ(0,"div",6)(1,"p",7)(2,"strong"),t._uU(3),t.qZA()(),t._UZ(4,"br")(5,"br")(6,"br")(7,"br")(8,"br")(9,"br")(10,"br"),t.TgZ(11,"button",10),t.NdJ("click",function(){t.CHM(s);const n=t.oxw();return t.KtG(n.empezarJuego())}),t._uU(12,"Volver a jugar"),t.qZA(),t._UZ(13,"br")(14,"br")(15,"br"),t.TgZ(16,"button",9),t._uU(17,"Volver"),t.qZA(),t._UZ(18,"br")(19,"br")(20,"br"),t.TgZ(21,"button",11),t._uU(22,"Desea realizar una breve encuesta?"),t.qZA()()}if(2&o){const s=t.oxw();t.xp6(3),t.hij("TU RECORD FUE DE ",s.puntaje," PUNTOS!")}}function _(o,a){1&o&&(t.TgZ(0,"h3",20),t._uU(1,"La proxima carta ser\xe1 mayor o menor???"),t.qZA())}function b(o,a){1&o&&(t.TgZ(0,"h3",20),t._uU(1,"Selecciona la carta:"),t.qZA())}function y(o,a){if(1&o){const s=t.EpF();t.TgZ(0,"img",21),t.NdJ("click",function(){t.CHM(s);const n=t.oxw(2);return t.KtG(n.sacarCarta())}),t.qZA()}if(2&o){const s=t.oxw(2);t.Q6J("hidden",!s.desactivado)}}function f(o,a){if(1&o&&t._UZ(0,"img",22),2&o){const s=t.oxw(2);t.Q6J("src",s.carta.path,t.LSH)}}const M=function(o,a){return{"text-success":o,"text-danger":a}};function j(o,a){if(1&o){const s=t.EpF();t.TgZ(0,"div",6),t.YNc(1,_,2,0,"h3",12),t.YNc(2,b,2,0,"h3",12),t._UZ(3,"br")(4,"br"),t.YNc(5,y,1,1,"img",13),t.TgZ(6,"button",14),t.NdJ("click",function(){t.CHM(s);const n=t.oxw();return t.KtG(n.elegirMayorMenor(!0))}),t._uU(7,"Mayor"),t.qZA(),t._UZ(8,"br")(9,"br"),t.TgZ(10,"button",14),t.NdJ("click",function(){t.CHM(s);const n=t.oxw();return t.KtG(n.elegirMayorMenor(!1))}),t._uU(11,"Menor"),t.qZA(),t.TgZ(12,"div",15),t._UZ(13,"br"),t.YNc(14,f,1,1,"img",16),t.qZA(),t.TgZ(15,"div",17)(16,"p",18)(17,"strong"),t._uU(18),t.qZA()(),t.TgZ(19,"p",19)(20,"strong"),t._uU(21),t.qZA()(),t.TgZ(22,"p",19)(23,"strong"),t._uU(24),t.qZA()()(),t._UZ(25,"br"),t.qZA()}if(2&o){const s=t.oxw();t.xp6(1),t.Q6J("ngIf",!s.desactivado),t.xp6(1),t.Q6J("ngIf",s.desactivado),t.xp6(3),t.Q6J("ngIf",s.mostrarCarta),t.xp6(1),t.Q6J("hidden",s.desactivado),t.xp6(4),t.Q6J("hidden",s.desactivado),t.xp6(4),t.Q6J("ngIf",s.mostrarCarta),t.xp6(2),t.Q6J("ngClass",t.WLB(10,M,s.gana,!s.gana)),t.xp6(2),t.Oqu(s.informe),t.xp6(3),t.hij("Puntaje: ",s.puntaje,""),t.xp6(3),t.hij("Intentos: ",s.intentos,"")}}function x(o,a){if(1&o){const s=t.EpF();t.TgZ(0,"app-resultados",23),t.NdJ("cerrado",function(n){t.CHM(s);const Z=t.oxw();return t.KtG(Z.cerrandoResultados(n))}),t.qZA()}if(2&o){const s=t.oxw();t.Q6J("listaResultados",s.jugadores)}}const w=[{path:"",children:[{path:"",component:(()=>{class o{constructor(s){this.resultados=s,this.juego="MayorMenor",this.comienza=!1,this.sinJugar=!0,this.mostrarCarta=!1,this.numero=0,this.cartas=[],this.puntaje=0,this.desactivado=!1,this.informe="",this.mayor=!1,this.gana=!1,this.terminado=!1,this.jugadores=[]}ngOnInit(){this.cargarCartas()}empezarJuego(){this.comienza=!0,this.sinJugar=!1,this.terminado=!1,this.informe="",this.puntaje=0,this.intentos=0,this.numero=Math.floor(47*Math.random()+0),this.carta=this.cartas[this.numero]}elegirMayorMenor(s){setTimeout(()=>{this.desactivado=!0,this.mostrarCarta=!0,this.mayor=s,this.cartaAnterior=this.carta},400)}sacarCarta(){setTimeout(()=>{this.numero=Math.floor(47*Math.random()+0),this.carta=this.cartas[this.numero],this.mayor?this.cartaAnterior.valor<this.carta.valor?(this.puntaje++,this.gana=!0,this.informe="Enhorabuena!!! La carta es mayor, ganaste un punto!"):this.cartaAnterior.valor>this.carta.valor&&(this.gana=!1,this.informe="Uh, te equivocaste. La carta era menor. Int\xe9ntalo de nuevo."):this.mayor||(this.cartaAnterior.valor>this.carta.valor?(this.puntaje++,this.gana=!0,this.informe="Enhorabuena!!! La carta es menor, ganaste un punto!"):this.cartaAnterior.valor<this.carta.valor&&(this.gana=!1,this.informe="Uh, te equivocaste. la carta era mayor. Int\xe9ntalo de nuevo.")),this.cartaAnterior.valor==this.carta.valor&&(this.gana=!1,this.informe="Las cartas son iguales, no se suma puntos!"),this.desactivado=!1,this.intentos++,10==this.intentos&&(this.terminado=!0,this.comienza=!1,this.resultados.guardarResultado(this.juego,this.puntaje))},400)}cargarCartas(){this.cartas.push(new e(1,"../../../../assets/juegos/mayormenor/1e.png")),this.cartas.push(new e(1,"../../../../assets/juegos/mayormenor/1b.png")),this.cartas.push(new e(1,"../../../../assets/juegos/mayormenor/1c.png")),this.cartas.push(new e(1,"../../../../assets/juegos/mayormenor/1o.png")),this.cartas.push(new e(2,"../../../../assets/juegos/mayormenor/2e.png")),this.cartas.push(new e(2,"../../../../assets/juegos/mayormenor/2b.png")),this.cartas.push(new e(2,"../../../../assets/juegos/mayormenor/2c.png")),this.cartas.push(new e(2,"../../../../assets/juegos/mayormenor/2o.png")),this.cartas.push(new e(3,"../../../../assets/juegos/mayormenor/3e.png")),this.cartas.push(new e(3,"../../../../assets/juegos/mayormenor/3b.png")),this.cartas.push(new e(3,"../../../../assets/juegos/mayormenor/3c.png")),this.cartas.push(new e(3,"../../../../assets/juegos/mayormenor/3o.png")),this.cartas.push(new e(4,"../../../../assets/juegos/mayormenor/4e.png")),this.cartas.push(new e(4,"../../../../assets/juegos/mayormenor/4b.png")),this.cartas.push(new e(4,"../../../../assets/juegos/mayormenor/4c.png")),this.cartas.push(new e(4,"../../../../assets/juegos/mayormenor/4o.png")),this.cartas.push(new e(5,"../../../../assets/juegos/mayormenor/5e.png")),this.cartas.push(new e(5,"../../../../assets/juegos/mayormenor/5b.png")),this.cartas.push(new e(5,"../../../../assets/juegos/mayormenor/5c.png")),this.cartas.push(new e(5,"../../../../assets/juegos/mayormenor/5o.png")),this.cartas.push(new e(6,"../../../../assets/juegos/mayormenor/6e.png")),this.cartas.push(new e(6,"../../../../assets/juegos/mayormenor/6b.png")),this.cartas.push(new e(6,"../../../../assets/juegos/mayormenor/6c.png")),this.cartas.push(new e(6,"../../../../assets/juegos/mayormenor/6o.png")),this.cartas.push(new e(7,"../../../../assets/juegos/mayormenor/7e.png")),this.cartas.push(new e(7,"../../../../assets/juegos/mayormenor/7b.png")),this.cartas.push(new e(7,"../../../../assets/juegos/mayormenor/7c.png")),this.cartas.push(new e(7,"../../../../assets/juegos/mayormenor/7o.png")),this.cartas.push(new e(8,"../../../../assets/juegos/mayormenor/8e.png")),this.cartas.push(new e(8,"../../../../assets/juegos/mayormenor/8b.png")),this.cartas.push(new e(8,"../../../../assets/juegos/mayormenor/8c.png")),this.cartas.push(new e(8,"../../../../assets/juegos/mayormenor/8o.png")),this.cartas.push(new e(9,"../../../../assets/juegos/mayormenor/9e.png")),this.cartas.push(new e(9,"../../../../assets/juegos/mayormenor/9b.png")),this.cartas.push(new e(9,"../../../../assets/juegos/mayormenor/9c.png")),this.cartas.push(new e(9,"../../../../assets/juegos/mayormenor/9o.png")),this.cartas.push(new e(10,"../../../../assets/juegos/mayormenor/10e.png")),this.cartas.push(new e(10,"../../../../assets/juegos/mayormenor/10b.png")),this.cartas.push(new e(10,"../../../../assets/juegos/mayormenor/10c.png")),this.cartas.push(new e(10,"../../../../assets/juegos/mayormenor/10o.png")),this.cartas.push(new e(11,"../../../../assets/juegos/mayormenor/11e.png")),this.cartas.push(new e(11,"../../../../assets/juegos/mayormenor/11b.png")),this.cartas.push(new e(11,"../../../../assets/juegos/mayormenor/11c.png")),this.cartas.push(new e(11,"../../../../assets/juegos/mayormenor/11o.png")),this.cartas.push(new e(12,"../../../../assets/juegos/mayormenor/12e.png")),this.cartas.push(new e(12,"../../../../assets/juegos/mayormenor/12b.png")),this.cartas.push(new e(12,"../../../../assets/juegos/mayormenor/12c.png")),this.cartas.push(new e(12,"../../../../assets/juegos/mayormenor/12o.png"))}traerPuntajes(){this.puntajes=!0,this.resultados.traerResultados(this.juego).subscribe(s=>{this.jugadores=s})}cerrandoResultados(s){this.puntajes=s}}return o.\u0275fac=function(s){return new(s||o)(t.Y36(m.q))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-mayor-menor"]],decls:9,vars:4,consts:[[1,"tablero"],["src","../../../../assets/juegos/mayormenor/fondo.jpg","alt","",1,"fondo"],["class","juego",4,"ngIf"],[1,"salir"],[1,"miBtn2",2,"margin-top","20px",3,"click"],[3,"listaResultados","cerrado",4,"ngIf"],[1,"juego"],[1,"puntuacion"],[1,"btn","btn-block","btn-lg","btn-outline-success",3,"click"],["routerLink","./../../juegos/lista",1,"btn","btn-block","btn-lg","btn-outline-danger"],[1,"btn","btn-block","btn-lg","btn-outline-primary",3,"click"],["routerLink","./../../encuesta",1,"btn","btn-block","btn-lg","btn-outline-success"],["style","text-decoration: underline; text-align: center;",4,"ngIf"],["class","carta","style","cursor:pointer","src","../../../../assets/juegos/mayormenor/dorso.png",3,"hidden","click",4,"ngIf"],[1,"btn","btn-block","btn-lg","btn-dark",3,"hidden","click"],[1,"contenedor","text-center","text-dark"],["class","carta2",3,"src",4,"ngIf"],[1,"informes"],[2,"text-align","center",3,"ngClass"],[2,"text-align","left"],[2,"text-decoration","underline","text-align","center"],["src","../../../../assets/juegos/mayormenor/dorso.png",1,"carta",2,"cursor","pointer",3,"hidden","click"],[1,"carta2",3,"src"],[3,"listaResultados","cerrado"]],template:function(s,r){1&s&&(t.TgZ(0,"div",0),t._UZ(1,"img",1),t.YNc(2,l,18,0,"div",2),t.YNc(3,d,23,1,"div",2),t.YNc(4,j,26,13,"div",2),t.qZA(),t.TgZ(5,"div",3)(6,"button",4),t.NdJ("click",function(){return r.traerPuntajes()}),t._uU(7,"RESULTADOS"),t.qZA()(),t.YNc(8,x,1,1,"app-resultados",5)),2&s&&(t.xp6(2),t.Q6J("ngIf",r.sinJugar),t.xp6(1),t.Q6J("ngIf",r.terminado),t.xp6(1),t.Q6J("ngIf",r.comienza),t.xp6(4),t.Q6J("ngIf",r.puntajes))},dependencies:[c.mk,c.O5,u.rH,h.K],styles:[".tablero[_ngcontent-%COMP%]{width:70%;height:70%;background-color:#fff;align-items:center;position:relative;left:13%}.fondo[_ngcontent-%COMP%]{position:absolute;max-width:200%;max-height:100%;width:100%}button[_ngcontent-%COMP%]:hover{font-weight:700}button[_ngcontent-%COMP%]:active{transform:scale(.98)}.puntuacion[_ngcontent-%COMP%]{text-align:center;position:absolute;font-size:22px;font-weight:700;font-family:Gill Sans,Gill Sans MT,Calibri,Trebuchet MS,sans-serif;left:160px;border-width:10px;border-style:groove;border-radius:10%;border-color:#7e4e1e;width:50%;top:60px}.juego[_ngcontent-%COMP%]{background-color:#b9a591;position:relative;width:79%;height:93%;left:100px;align-items:center;justify-content:center;z-index:0;opacity:.85}.carta2[_ngcontent-%COMP%]{bottom:100px;right:202px;position:absolute}.par[_ngcontent-%COMP%]{top:140px;left:40px;position:absolute}.informes[_ngcontent-%COMP%]{position:absolute;bottom:0}.carta[_ngcontent-%COMP%]{left:260px;top:80px;position:absolute}.carta[_ngcontent-%COMP%]:active{transform:scale(.98);box-shadow:3px 2px 1px rgb(#EECC88,#7E4E1E,black)}.contenedor[_ngcontent-%COMP%]{position:absolute;width:80%;margin:0;bottom:22px}"]}),o})()}]}];let v=(()=>{class o{}return o.\u0275fac=function(s){return new(s||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[u.Bz.forChild(w),u.Bz]}),o})(),C=(()=>{class o{}return o.\u0275fac=function(s){return new(s||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[c.ez,v,g.JuegoModule]}),o})()}}]);