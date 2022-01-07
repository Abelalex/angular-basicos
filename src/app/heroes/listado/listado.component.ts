import { Component} from '@angular/core';


@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent { 

  heroes: string [] = ['Batman','Superman', 'Mujer Maravilla', 'Linterna Verde', 'Flash', 'Robin'];
  heroeBorrado: string = '';

  BorrarHeroe(){

    const borrandoheroes = this.heroes.shift();
  
    this.heroeBorrado=this.heroes.shift() || '';

  }

}
