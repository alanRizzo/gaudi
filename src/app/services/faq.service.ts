import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FaqService {

  private faq: any[] = [
    {
      pregunta: '¿Qué es la demasía de impresión?',
      // tslint:disable-next-line:max-line-length
      respuesta: `La demasía es un área impresa que finalmente no formará parte de la pieza final. Se utiliza cuando tenemos imágenes o fondos que se imprimirán “al corte”, es decir, que llegarán hasta el borde del papel.\nLuego de la impresión, las piezas gráficas son cortadas para finalmente llegar al tamaño real del diseño. Por lo general, se debe dejar una demasía de 3 a 5 mm. de cada lado aproximadamente.`,
      header: 'hFaq1',
      body: 'bFaq1',
      hbody: '#bFaq1'
    },
    {
      pregunta: '¿En que resolución debo mandar el archivo?',
      respuesta: 'En general, las imágenes con más resolución producen una calidad de impresión mejor.',
      header: 'hFaq2',
      body: 'bFaq2',
      hbody: '#bFaq2'
    },
    {
      pregunta: '¿Cuales son las resoluciones recomendadas, según el tipo de impresión?',
      // tslint:disable-next-line:max-line-length
      respuesta: `Fotos color: 250 - 400 dpi.\nEscala de grises: 300 - 600 dpi.\nBlanco y negro: 400 - 800 dpi.Aquí hace falta más resolución para evitar picos de sierra.\nPara cartelería y fotografía gigante vale con 150 dpi a tamaño real.\nLos archivos vectoriales son independientes de la resolución.`,
      header: 'hFaq3',
      body: 'bFaq3',
      hbody: '#bFaq3'
    },
    {
      pregunta: '¿Cómo trabajo la gestión de color?',
      // tslint:disable-next-line:max-line-length
      respuesta: `Salvo que sepas exactamente lo que estás haciendo en tu gestión de color, el PDF para impresión debería contener sólo objetos en CMYK sin perfiles asociados o incrustados. En el caso que tengas correctamente configurada la gestión de color y tu monitor esté calibrado, el PDF podrá contener también objetos en RGB con sus correspondientes perfiles ICC incrustados.`,
      header: 'hFaq4',
      body: 'bFaq4',
      hbody: '#bFaq4'
    }
  ];

  constructor() { }

  getFAQ() {
    return this.faq;
  }
}
