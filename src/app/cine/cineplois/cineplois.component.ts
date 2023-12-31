import { Component } from '@angular/core';

@Component({
  selector: 'app-cineplois',
  templateUrl: './cineplois.component.html',
  styleUrls: ['./cineplois.component.css']
})
export class CineploisComponent {
  nombre: string = '';
  cantidadCompradores: number = 0;
  club: string='';
  cantidadBoletos: number = 0;
  maxBoletos: number = 7;
  totalPagar: number = 0;
  mostrarCamposEntrada: boolean = false;
  error: boolean = false;

  CantidadBoletos() {
    if (this.cantidadCompradores <= 0) {
      this.cantidadCompradores = 1;
      this.cantidadBoletos = 1;
    }
  
    this.maxBoletos = 7 * this.cantidadCompradores;
  
    if (this.cantidadBoletos < 0) {
      this.cantidadBoletos = 0;
    }
    if (this.cantidadBoletos > this.maxBoletos) {
      this.cantidadBoletos = this.maxBoletos;
    }
  }  

  calcularTotal() {
    if (this.cantidadBoletos > this.cantidadCompradores * 7) {
      this.error = true;
      this.mostrarCamposEntrada = false;

    } else {
      this.error = false;
      const precioPorBoleto = 12;
      let descuento = 0;
      let descuentoclub = 0;
  
      if (this.cantidadBoletos >= 5) {
        descuento = 0.15;
      } else if (this.cantidadBoletos >= 3) {
        descuento = 0.10;
      }
  
      if (this.club === "si") {
        descuentoclub += 0.10;
      }
  
      let total = this.cantidadBoletos * precioPorBoleto;
      total -=total * descuento;
      total -= total * descuentoclub;
  
      this.totalPagar = total;
      this.mostrarCamposEntrada = true;
    }
  }
  
  

  F5() {
    window.location.reload();
  }
}
