import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private products: Product[] = [
    {
      nombre: 'Impresión A4',
      info: 'Impresión digital de alta definición en variedad de papeles, colores, texturas y gramajes.',
      smallImg: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/8-col/img%20(73).jpg',
      bigImg: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/8-col/img%20(73).jpg',
    },
    {
      nombre: 'Impresión A3',
      info: 'Impresión digital de alta definición en variedad de papeles, colores, texturas y gramajes.',
      smallImg: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/8-col/img%20(73).jpg',
      bigImg: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/8-col/img%20(73).jpg',
    },
    {
      nombre: 'Fotos en digital',
      info: 'Impresión digital A6(10,5 x 14,8) en papel fotográfico con acabado brillante.',
      smallImg: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/8-col/img%20(73).jpg',
      bigImg: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/8-col/img%20(73).jpg',
    },
    {
      nombre: 'Lonas y vinilos',
      info: `Lona impresa (3,10 m*)
      - Backlight.
      - Frontlight.
      - Blackout.
      - Banner y estructura portabanner (1,90 x 0,90 m)

      Canvas
      - Neutro (1,37 m*)
      - Mate (0,60 m*)
      - Satinado (1,35 m*)

      Tela de avión (1,35 m*)

      Vinilo autadhesivo impreso (1,47 m*)
      - Blanco mate.
      - Blanco brillante.
      - Transparente.
      - Microperforado.

      Vinilo de corte (0,60 m*)
      - Amplia gama de colores.
      - Esmerilado blanco y gris.

      * Ancho máximo.`,
      smallImg: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/8-col/img%20(73).jpg',
      bigImg: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/8-col/img%20(73).jpg',
    },
    {
      nombre: 'Tarjetas personales',
      info: `Impresión digital 1200 dpi (moódulo x 100 y 250)
      - Entrega en 24/48 hs hábiles.

      Offset alta calidad (módulo x 1000)
      - Opp mate.
      - Opp Brillante.
      - UV sectorizado Gratis.`,
      smallImg: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/8-col/img%20(73).jpg',
      bigImg: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/8-col/img%20(73).jpg',
    },
    {
      nombre: 'Tarjetas de invitación',
      info: `Impresión de alta calidad en diferentes papeles, tamaños, texturas y colores para tarjetería de eventos y acontecimientos.
      Asesoramiento en el diseño.`,
      smallImg: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/8-col/img%20(73).jpg',
      bigImg: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/8-col/img%20(73).jpg',
    },
    {
      nombre: 'Carpetas institucionales',
      info: `En papel ilustración de 350 g.
      Las mismas se conforman con marca de doblez y solapa blanca con porta tarjetas.`,
      smallImg: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/8-col/img%20(73).jpg',
      bigImg: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/8-col/img%20(73).jpg',
    },
    {
      nombre: 'Tesis',
      info: `Encuadernados en tapa dura o en tapa blanda. Cosidos o anillados.
      Margen de costura:
      El cosido ocupa 1 cm, recomendamos dejar de 2,5 a 3,5 cm. de margen izquierdo total.`,
      smallImg: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/8-col/img%20(73).jpg',
      bigImg: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/8-col/img%20(73).jpg',
    },
    {
      nombre: 'Planos',
      info: `Impresión de planos municipales, pliegos de obra y habilitaciones de gas en papel bond 90 grs y vegetal 90 grs
      Ancho máximo de impresión 1,06m.`,
      smallImg: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/8-col/img%20(73).jpg',
      bigImg: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/8-col/img%20(73).jpg',
    },
    {
      nombre: 'Folletos y trípticos',
      info: `Folletos informativos
      Impresión full color
      Imprimibles en diferentes tamaños y papeles`,
      smallImg: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/8-col/img%20(73).jpg',
      bigImg: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/8-col/img%20(73).jpg',
    },
    {
      nombre: 'Fanzines',
      info: `Impresos en A5, A4, A3 en variedad de texturas y gramajes de papel.
      Se entregan doblados y abrochados.`,
      smallImg: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/8-col/img%20(73).jpg',
      bigImg: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/8-col/img%20(73).jpg',
    },
    {
      nombre: 'Tiras de fotos',
      info: `En papel ilustración de 300g.
      3 fotos por tira.`,
      smallImg: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/8-col/img%20(73).jpg',
      bigImg: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/8-col/img%20(73).jpg',
    },
    {
      nombre: 'Foto Libro',
      info: `En papel ilustración 300g.
      2 fotos por página.
      Encuadernado artístico.
      Tiempo de entrega aproximado 5 días.`,
      smallImg: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/8-col/img%20(73).jpg',
      bigImg: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/8-col/img%20(73).jpg',
    },
    {
      nombre: 'Bitácoras',
      info: `Traé tus diseños y armá una bitácora personalizada.
      Elegí el tamaño, textura y color del papel.
      Somos punto de venta de bitácoras Paprika.`,
      smallImg: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/8-col/img%20(73).jpg',
      bigImg: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/8-col/img%20(73).jpg',
    },
    {
      nombre: 'Impresiones en vegetal',
      info: `Ideal para serigrafía.
      Tamaños disponibles A4, A3 y en rollo de 90 cm.`,
      smallImg: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/8-col/img%20(73).jpg',
      bigImg: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/8-col/img%20(73).jpg',
    }
  ];

  constructor() { }

  getProducts() {
    return this.products;
  }

  getProduct( idx: number ) {
    return this.products[idx];
  }
}


export interface Product {
  nombre: string;
  info: string;
  smallImg: string;
  bigImg: string;
}
