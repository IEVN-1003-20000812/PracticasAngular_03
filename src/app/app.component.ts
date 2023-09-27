import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PracticasAngular_03';
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
