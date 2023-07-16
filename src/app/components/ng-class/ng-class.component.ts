import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.css']
})
export class NgClassComponent {

  aClases:string[];
  miCondicion:boolean;
  miCondicion2:boolean;

  constructor() {
    this.miCondicion = false;
    this.miCondicion2 = false;

    this.aClases = [
      'fondo-azul ', 
      'texto-grande'
     
    ]
    
  }
  getUnaClase():string{
    return 'texto-grueso'
  }
}
