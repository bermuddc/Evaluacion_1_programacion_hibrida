import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-triangulo',
  templateUrl: './triangulo.component.html',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class TrianguloComponent {
  ladoA: number = 0;
  ladoB: number = 0;
  ladoC: number = 0;
  perimetro: number | null = null;

  calcularPerimetro() {
    if (this.ladoA > 0 && this.ladoB > 0 && this.ladoC > 0) {
      if (
        this.ladoA + this.ladoB > this.ladoC &&
        this.ladoA + this.ladoC > this.ladoB &&
        this.ladoB + this.ladoC > this.ladoA
      ) {
        this.perimetro = this.ladoA + this.ladoB + this.ladoC;
      } else {
        alert("¡Los lados no forman un triángulo válido!");
      }
    } else {
      alert("Todos los lados deben ser mayores que cero");
    }
  }
}
