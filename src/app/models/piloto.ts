export class Piloto{
    //mapear una tabla de base de datos
/*
    nombre:string;
    escuderia:string;
    campeonMundial:boolean;
    */
   //De la siguiente manera nos ahorramos declarara e inicializar en el constructor.
   //Lo ponemos en el paréntesis del constructor


    constructor(
        public nombre:string, 
        public escuderia:string, 
        public campeonMundial:boolean){
        /**
         * this.nombre = nombre;
        this.escuderia = escuderia;
        this.campeonMundial = campeonMundial;
         */
        

    }
}