import { Component } from '@angular/core';

@Component({
  selector: 'app-cineplois',
  templateUrl: './cineplois.component.html',
  styleUrls: ['./cineplois.component.css']
})
export class CineploisComponent {
  nombre: string = '';
  cantidadCompradores: number = 0;
  club: boolean = false;
  cantidadBoletos: number = 0;
  maxBoletos: number = 7;
  totalPagar: number = 0;
  mostrarCamposEntrada: boolean = false;

  CantidadBoletos() {
    if (this.cantidadCompradores <= 0) {
      this.cantidadCompradores = 1;
    }
  
    this.maxBoletos = 7 * this.cantidadCompradores;
  
    if (this.cantidadBoletos <= 0) {
      this.cantidadBoletos = 1;
    }

    if (this.cantidadBoletos > this.maxBoletos) {
      this.cantidadBoletos = this.maxBoletos;
    }
  }  

  calcularTotal() {
    const precioPorBoleto = 12;
    let descuento = 0;

    if (this.cantidadBoletos >= 5) {
      descuento = 0.15;
    } else if (this.cantidadBoletos >= 3) {
      descuento = 0.10;
    }

    let total = this.cantidadBoletos * precioPorBoleto;
    total -= total * descuento;

    if (this.club == true) {
      total -= total * 0.10;
    }

    this.totalPagar = total;
    this.mostrarCamposEntrada = true;
  }

  F5() {
    window.location.reload();
  }
}
