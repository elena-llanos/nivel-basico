import { Component, OnInit } from '@angular/core';
import { Piloto } from 'src/app/models/piloto';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

  aPilotos:Array<Piloto>=[];





  ngOnInit(): void {
   this.cargarDatos();
  }

  cargarDatos():void{
    //vamos a llamar a un servicio y este va llamar a una base de datos...en el futuro

    this.aPilotos = [
      new Piloto("Fernando Alonso", "Aston Martin" , true),
      new Piloto("Carlos Sainz", "Ferrari" , false),
      new Piloto("Lewis Hamilton", "Mercedes" , true),
      new Piloto("Max Verstappen", "Red Bull" , true),
    
    ];




  }

}
