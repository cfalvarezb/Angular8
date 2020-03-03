import { Component } from '@angular/core';

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html'
})
export class BodyComponent {

    mostrar = true;

    frase: any = {
        mensaje: 'Un gran poder conlleva a una gran responsabilidad',
        autor: 'Goku'
    };

    personajes: string [] = [ 'Perro', 'Gato', 'Loro', 'Cabra' ];


    constructor() {}
}