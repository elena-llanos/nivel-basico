import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one-way-binding',
  templateUrl: './one-way-binding.component.html',
  styleUrls: ['./one-way-binding.component.css']
})

/** hooks */
export class OneWayBindingComponent implements OnInit {



  miSaludo: string;
  nombre: string;

  constructor(){
    //Definimos los valores de las propiedades
    this.miSaludo="Hola desde Angular";
    this.nombre="Pepito";
    //this: cuando yo defino una clase this se refiere a cada una de las instancias que esa clase va a producir. Es cada uno de ellos.
    //Cuando usemos un atributo hay que poner siempre this. Al dar valor a un atributo, siempre this.

  }
  ngOnInit(): void {
    //este método se llama automaticamente desde angular cada vez que una instancia es creada
    console.log("ngOninit ha sido llamado");
  }

}
