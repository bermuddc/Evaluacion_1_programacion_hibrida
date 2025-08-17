import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CirculoComponent } from '../circulo/circulo.component';
import { TrianguloComponent } from '../triangulo/triangulo.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule, 
    FormsModule,  
    CirculoComponent,
    TrianguloComponent
  ]
})
export class HomePage {
  figuraSeleccionada: string = '';

  cambiarFigura(event: any) {
    this.figuraSeleccionada = event.detail.value;
  }
}