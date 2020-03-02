function imprimirConsola( constructorClase: Function){
    console.log(constructorClase);
}

@imprimirConsola
export class Xmen{ 
//el export significa que se quiere utilizar la clase en otras clases si se deja sin esto solo se puede utilizar en el archivo
    constructor(
        public nombre: string,
        public clave : string,


    ){}

    imprimir(){
        console.log(`Nombre: ${ this.nombre }, Clave: ${ this.clave }`);
    }

}