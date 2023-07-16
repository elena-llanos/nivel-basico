import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent {

  nombre:string; //protesta porque no está inicializada . cambiamos en el tsconfig strictPropertyInitialization; false;
  urlImagen: string;
  estado: boolean;
  miClase: string;

  constructor() {
    this.nombre = "Antonio";
    this.estado = true;
    this.miClase = "fondo-rojo";
    this.urlImagen = "/assets/img/fotovilla.jpg";    
  }


}
