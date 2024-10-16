export abstract class FiguraGeometrica {
    nombre:string;
    
    constructor(nombre:string){
        this.nombre=nombre;
    }
    abstract calcularPerimetro():number
}

export class Circulo extends FiguraGeometrica {
    radio:number;

    constructor(nombre: string, radio:number) {
        super ("circulo");
        this.radio = radio;
    }

    override calcularPerimetro(): number {
       return 2 * Math.PI * this.radio;
    }
}

export class TrianguloEscaleno extends FiguraGeometrica {
    lado1:number;
    lado2:number;
    lado3:number;

    constructor(lado1:number, lado2:number, lado3:number){
        super("Triangulo Escaleno");
        this.lado1=lado1;
        this.lado2=lado2;
        this.lado3=lado3;
    }

    override calcularPerimetro(): number {
        return this.lado1 + this.lado2 + this.lado3;
    }
}

export class TrianguloEquilatero extends FiguraGeometrica {
    lado:number;

    constructor(lado:number){
        super("Triangulo Equilatero");
        this.lado=lado;
    }

    override calcularPerimetro(): number {
        return this.lado * 3;
    }
}