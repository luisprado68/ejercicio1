import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title:string = 'Ejercicio 1';
  suma:number=0;
  promedio:number=0;
  numero:number=0;
  numeroDos:number=0;

   
   calcular():void{

    this.suma =this.numero + this.numeroDos;
    this.promedio = this.suma / 2;
   }

   limpiar():void{
      this.numero=0;
      this.numeroDos=0;
      this.suma=0;
      this.promedio=0;
   }

}
