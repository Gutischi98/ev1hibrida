import { Component, OnInit } from '@angular/core';
import { IonList, IonItem, IonInput, IonText, IonButton } from "@ionic/angular/standalone";
import { FormsModule } from '@angular/forms';
import { Circulo } from '../modelo/Figura';

@Component({
  selector: 'app-circulo',
  templateUrl: './circulo.component.html',
  styleUrls: ['./circulo.component.scss'],
  imports: [FormsModule, IonList, IonItem, IonInput, IonText, IonButton], 
  standalone: true,
})
export class CirculoComponent  implements OnInit {

  radioStr:string = '';
  resultado:string = '';

  calcularPerimetro() {
    const radio = parseInt(this.radioStr);
    const circulo = new Circulo("circulo", radio);
    const perimetro = circulo.calcularPerimetro()
    if  (isNaN(perimetro)) {
      this.resultado = "Error: El radio debe ser un número";
    }else{
      this.resultado = `El perímetro del circulo es ${perimetro.toFixed(3)}`;
    }
  }

  constructor() { }

  ngOnInit() {}

}
