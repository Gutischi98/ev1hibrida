Desarrolle una aplicación híbrida usando Ionic Framework que permita calcular el perímetro para distintas figuras geométricas. Se pide lo siguiente:

1.	Crear proyecto de Ionic Framework usando la plantilla en blanco
2.	Crear jerarquía de clases en Typescript según diagrama UML
3.	Crear 2 componentes Standalone de Angular dentro del proyecto: círculo y triángulo
4.	Incorpore un elemento ion-select en el componente "home", que sirva para elegir la figura geométrica con la que se desea trabajar. Este componente está previamente configurado utilizando la plantilla en blanco de Ionic para representar la página inicial. 
5.	Usando la directiva *ngIf muestre el componente que corresponda según se seleccione en ion-select 
6.	Cree los formularios dentro de cada componente (círculo y triángulo) para solicitar al usuario los valores necesarios para calcular el perímetro de la figura. En el caso del triángulo, tenga en cuenta que se trata de un triángulo escaleno.
7.	Utilice el evento “click” sobre un elemento ion-button para desencadenar el cálculo del perímetro. El mensaje con el resultado solo debe mostrarse una vez se presione el botón.
8.	Dentro de cada componente utilice ion-card y ion-image para colocar más información de la figura geométrica, algo similar a como se muestran en las figuras a continuación.


Se pide:

1.	Elabore un informe donde explique, con sus propias palabras, los fragmentos más significativos del código, de acuerdo con los criterios de evaluación establecidos. A continuación, se presenta una estructura sugerida para la redacción del informe.
2.	Adjunte el proyecto o incluya un enlace al mismo dentro del informe, preferiblemente en plataformas como Github, Google Drive, OneDrive, u otras similares. Es esencial eliminar la carpeta node_modules antes de adjuntar el trabajo, ya que su inclusión haría que el tamaño del proyecto sea considerablemente grande.


Diagrama de Clases:

figuraGeometrica {
    nombre: string
    constructor(nombre:string)
    calcularPerimetro():number
}

Circulo {
    radio: number
    constructor(radio:number)
    calcularPerimetro():number
}

TrianguloEscaleno {
    lado1: number
    lado2: number
    lado3: number
    constructor(lado1:number, lado2:number, lado3:number)
    calcularPerimetro():number
}

TrianguloEquilatero {
    lado: number
    constructor(lado:number)
    calcularPerimetro():number
}


Figura 1 Diagrama de clases en UML

Para aquellos que no estén familiarizados con UML, el diagrama presenta cuatro clases: FiguraGeometrica, Circulo, TrianguloEscaleno y TrianguloEquilatero. La primera clase, FiguraGeometrica, es abstracta, lo que significa que no se puede instanciar. Además, contiene un método llamado calcularPerimetro, que también se declara como abstracto (indicado en cursiva). Cuando un método es abstracto, implica que no es necesario proporcionar una implementación en la clase abstracta; sin embargo, las clases derivadas deben implementar este método.

Las otras tres clases son concretas, es decir, tienen implementación completa y son instanciables. Cada una de estas clases debe conocer la manera específica de calcular su perímetro. Es crucial respetar los tipos de datos y las firmas para cada miembro de la clase, ya sean atributos, constructores o métodos.
