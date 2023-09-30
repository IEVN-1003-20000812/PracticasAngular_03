import { Component } from '@angular/core';

@Component({
  selector: 'app-potencia',
  templateUrl: './potencia.component.html',
  styleUrls: ['./potencia.component.css']
})
export class PotenciaComponent {
  num1:number=0;
  num2:number=0;
  resultado:number=0;
  proceso:string='';

  calcular(){
    for(let i=0;i<this.num2;i++){
      this.resultado += this.num1;
      this.proceso += `${this.num1} + `;
    }
  }
}
