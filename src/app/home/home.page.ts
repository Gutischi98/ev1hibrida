import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonInput, IonSelectOption, IonSelect, SelectChangeEventDetail} from '@ionic/angular/standalone';
import { CirculoComponent } from '../circulo/circulo.component';
import { TrianguloEquilateroComponent } from '../triangulo-equilatero/triangulo-equilatero.component';
import { TrianguloEscalenoComponent } from '../triangulo-escaleno/triangulo-escaleno.component';
import { IonSelectCustomEvent } from '@ionic/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonSelect, IonSelectOption, IonList, IonInput, IonItem, CirculoComponent, TrianguloEquilateroComponent, TrianguloEscalenoComponent, CommonModule],
})
export class HomePage {

  figura:string = "";
  esCirculo() {return this.figura == "circulo"}
  esTrianguloEscaleno() {return this.figura == "escaleno"}
  esTrianguloEquilatero() {return this.figura == "equilatero"}

  manejarSeleccionFigura($event: IonSelectCustomEvent<SelectChangeEventDetail<any>>){
    this.figura = $event.detail.value;
  }


  constructor() {}
}
