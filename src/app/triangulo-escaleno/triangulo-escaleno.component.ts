import { Component, OnInit } from '@angular/core';
import { IonList, IonItem, IonInput, IonText, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCardSubtitle  } from "@ionic/angular/standalone";
import { FormsModule } from '@angular/forms';
import { TrianguloEscaleno } from '../modelo/Figura';

@Component({
  selector: 'app-triangulo-escaleno',
  templateUrl: './triangulo-escaleno.component.html',
  styleUrls: ['./triangulo-escaleno.component.scss'],
  imports: [FormsModule, IonList, IonItem, IonInput, IonText, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCardSubtitle],
  standalone: true,
})
export class TrianguloEscalenoComponent implements OnInit {

  lado1Str: string = '';
  lado2Str: string = '';
  lado3Str: string = '';
  resultado: string = '';

  calcularPerimetro() {
    const lado1 = parseInt(this.lado1Str)
    const lado2 = parseInt(this.lado2Str)
    const lado3 = parseInt(this.lado3Str)
    const triangulo = new TrianguloEscaleno(lado1, lado2, lado3);
    const perimetro = triangulo.calcularPerimetro();

    if (isNaN(perimetro)) {
      this.resultado = 'Error: Por favor, ingresa valores numéricos'
    } else {
      this.resultado = `El perímetro del triángulo es: ${perimetro}`
    }
  }

  constructor() { }

  ngOnInit() { }

}
