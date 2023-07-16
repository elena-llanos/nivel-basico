import { AfterViewInit, Component, Input } from '@angular/core';

@Component({
  selector: 'app-estrellas-likes',
  templateUrl: './estrellas-likes.component.html',
  styleUrls: ['./estrellas-likes.component.css']
})
export class EstrellasLikesComponent  implements AfterViewInit{

  //el after view ese se ejecuta cuando el html se termina de cargar
  aEstrellas:Array<null>=[];

  @Input() nStars:number;

  constructor() {   }
  
  ngAfterViewInit(): void {
    this.aEstrellas = new Array(this.nStars);
  }
}
