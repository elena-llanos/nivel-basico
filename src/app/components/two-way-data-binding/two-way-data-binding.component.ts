import { Component } from '@angular/core';

@Component({
  selector: 'app-two-way-data-binding',
  templateUrl: './two-way-data-binding.component.html',
  styleUrls: ['./two-way-data-binding.component.css']
})
export class TwoWayDataBindingComponent {

  datos:string = "El Quijote"
  miTexto:string;
  miColor:string;
  miColorDeFondo:string;
  miSize:string;
  miPadding:string;



  constructor(){
    this.miTexto = "Athletic Club";
    this.miColorDeFondo = "blue";
    this.miPadding = "0.5rem";
    this.miSize = "1rem";
    this.miColor = "white";
  }

}
