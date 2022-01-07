import {Component} from '@angular/core';

@Component({

    selector: 'app-heroes',
    templateUrl:'heroe.component.html'


})

export class HeroeComponent{

    nombre: string = 'Batman';
    edad: number = 25;

    get nombrecapitalizado(){
        return this.nombre.toUpperCase();
    }

    ObtenerNombre(): string {
        return `${this.nombre} - ${this.edad}`;
    }

    CambiarNombre(): void {

        this.nombre = 'Superman';
    }

    CambiarEdad(): void {
        this.edad = 30;
    }


}