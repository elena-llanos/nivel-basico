import { Component } from '@angular/core';

@Component({
  selector: 'app-corazon',
  templateUrl: './corazon.component.html',
  styleUrls: ['./corazon.component.css']
})
export class CorazonComponent {

  estadoCorazon:boolean = true;


  changeColor():void{
    this.estadoCorazon = !this.estadoCorazon;

  }

}
