import { Component } from '@angular/core';

@Component({
  selector: 'app-operas-bas',
  templateUrl: './operas-bas.component.html',
  styleUrls: ['./operas-bas.component.css']
})
export class OperasBasComponent {
  num1:string='';
  num2:string='';
  resultado:number=0;
  select:string = 'suma';

  calcular(){
    switch(this.select){
      case 'suma':
        this.resultado=parseInt(this.num1)+parseInt(this.num2);
      break;
      case 'resta':
        this.resultado=parseInt(this.num1)-parseInt(this.num2);
      break;
      case 'multi':
        this.resultado=parseInt(this.num1)*parseInt(this.num2);
      break;
      case 'divi':
        this.resultado=parseInt(this.num1)/parseInt(this.num2);
      break;
      default:
        this.resultado=0;
        break;
    }
  }
}
