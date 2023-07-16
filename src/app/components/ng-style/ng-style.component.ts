import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.css']
})
export class NgStyleComponent {

  size:number;
  bgc:string;
  

  constructor(){
    this.size = 20;
    this.bgc = "black"
  }
  
  cambioFondo(e:any):void{
    this.bgc = e.target.value;
  }

  agrandar(e:any):void{
  
    this.size++;

  }
}
