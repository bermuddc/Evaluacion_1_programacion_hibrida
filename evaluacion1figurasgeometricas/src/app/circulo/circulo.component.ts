import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular'; 
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-circulo',
  templateUrl: './circulo.component.html',
  standalone: true, 
  imports: [IonicModule, CommonModule, FormsModule] 
})
export class CirculoComponent {
  radio: number = 0;
  perimetro: number = 0;
  mostrarResultado: boolean = false;

  calcularPerimetro() {
    if (this.radio > 0) {
      this.perimetro = 2 * Math.PI * this.radio;
      this.mostrarResultado = true;
    } else {
      alert("El radio debe ser mayor que 0");
      this.mostrarResultado = false;
    }
  }
}
