import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';
  nombre: string = 'Iron Man';
  array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  PI: number = Math.PI;
  porcentaje: number = 0.1234;
  salario: number = 1234.5;
  
}
