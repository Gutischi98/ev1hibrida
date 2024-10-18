import { Component, OnInit } from '@angular/core';
import { IonList, IonItem, IonInput, IonText, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCardSubtitle } from "@ionic/angular/standalone";
import { FormsModule } from '@angular/forms';
import { TrianguloEquilatero } from '../modelo/Figura';

@Component({
  selector: 'app-triangulo-equilatero',
  templateUrl: './triangulo-equilatero.component.html',
  styleUrls: ['./triangulo-equilatero.component.scss'],
  imports: [FormsModule, IonList, IonItem, IonInput, IonText, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCardSubtitle],
  standalone: true,
})
export class TrianguloEquilateroComponent implements OnInit {
  ladosStr = '';
  resultado = '';

  calcularPerimetro() {
    const lados = parseInt(this.ladosStr);
    const triangulo = new TrianguloEquilatero(lados);
    const perimetro = triangulo.calcularPerimetro();
    
    if (isNaN(perimetro)) {
      this.resultado = `Error: Ingrese un valor numérico`;
    } else {
      this.resultado = `El perímetro del triángulo equilátero es: ${perimetro}`
    }
  }

  constructor() { }

  ngOnInit() { }

}
