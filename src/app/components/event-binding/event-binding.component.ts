import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent {

  /**
   * los objetos son copias de una clase
   * la clase no es nada, es una plantilla
   */

  estado: boolean;
  miTexto: string;
  miClase: string;
  colores: string[]; //colores:Array<string>;
  numeroElegido: number;
  contador: number;

  constructor() {



    this.estado = false;
    this.miTexto = "Villapellejos";
    this.colores = ["fondo-amarillo", "fondo-azul", "fondo-verde", "fondo-rojo"];
    this.miClase = this.colores[1];

  }


  deshabilitaButton(e: any): void {
    // console.log("botón pulsado sin evento");
    // console.log(e); //el evento es un objeto
    this.estado = true;


  }

  habilitaButton(e: any): void {
    this.estado = false;
  }

  onInput(e: any): void {
    /* console.log(e.target.value);
    this.contador = this.contador + 1;
    if (this.contador == 4){
      this.contador = 0
    }
      this.miClase = this.colores[this.contador]; */

    if(e.target.value == "fondo-amarillo"){
      this.miClase = this.colores[0];
    }else if(e.target.value == "fondo-azul"){
      this.miClase = this.colores[1]
    }else if(e.target.value == "fondo-rojo"){
      this.miClase = this.colores[3]
    }


  }






}
