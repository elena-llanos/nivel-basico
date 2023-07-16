import { Component, OnInit } from '@angular/core';
import { Guitarra } from 'src/app/models/guitarra';

@Component({
  selector: 'app-ng-for-thomann',
  templateUrl: './ng-for-thomann.component.html',
  styleUrls: ['./ng-for-thomann.component.css']
})
export class NgForThomannComponent implements OnInit {


  aGuitarras: Array<Guitarra> = [];
 


  ngOnInit(): void {
    //Interface que se implementa en la clase, solo tiene un método; ngOnInit
    //es el primer método que se va a ejecutar en la vida de un componente
    //Hay uno que es ngdestroy, que destruye cosas que ya no se van a utilizar, para ahorrar memoria

    this.getDatos();
  }

  getDatos() {
    //aqui hacemos la llamada a los servicios que llaman a la base de datos
    //de momento no tenemos, vamos a usar un array. 

    this.aGuitarras = [

      new Guitarra("Fender", "TB-70 SBK Deluxe Series", 5, "Construcción del mástil: Encolada (set-neck)", "Cuerpo de ocume", "Mástil de nato en forma de 'D'", 199, "assets/img/thomann/264956.webp", 3),
      new Guitarra("Harley Benton", "MV-4MSB Gotoh SFG", 2, "Deluxe Series", "Clavijero a juego", "Cuerpo de aliso", 229, "assets/img/thomann/491459.webp", 0),
      new Guitarra("Gibson", "HBZ-2004 Deluxe Series", 4, "Cuerpo de ovangkol", "Mástil a través del cuerpo (neck thru)", "Mástil de 7 piezas de caoba/arce/nato", 300, "assets/img/thomann/531035.webp", 6),



    ]

  }
}
