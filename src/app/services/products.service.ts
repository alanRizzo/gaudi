import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private products: any[] = [
    {
      nombre: 'Impresión A4',
      info: '',
      smallImg: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/8-col/img%20(73).jpg',
      bigImg: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/8-col/img%20(73).jpg',
    },
    {
      nombre: 'Impresión A3',
      info: '',
      smallImg: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/8-col/img%20(73).jpg',
      bigImg: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/8-col/img%20(73).jpg',
    },
    {
      nombre: 'Fotos en digital',
      info: '',
      smallImg: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/8-col/img%20(73).jpg',
      bigImg: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/8-col/img%20(73).jpg',
    },
    {
      nombre: 'Lonas y vinilos',
      info: '',
      smallImg: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/8-col/img%20(73).jpg',
      bigImg: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/8-col/img%20(73).jpg',
    },
    {
      nombre: 'Tarjetas personales',
      info: '',
      smallImg: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/8-col/img%20(73).jpg',
      bigImg: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/8-col/img%20(73).jpg',
    },
    {
      nombre: 'Tarjetas de invitación',
      info: '',
      smallImg: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/8-col/img%20(73).jpg',
      bigImg: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/8-col/img%20(73).jpg',
    },
    {
      nombre: 'Carpetas institucionales',
      info: '',
      smallImg: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/8-col/img%20(73).jpg',
      bigImg: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/8-col/img%20(73).jpg',
    },
    {
      nombre: 'Tesis',
      info: '',
      smallImg: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/8-col/img%20(73).jpg',
      bigImg: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/8-col/img%20(73).jpg',
    },
    {
      nombre: 'Planos',
      info: '',
      smallImg: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/8-col/img%20(73).jpg',
      bigImg: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/8-col/img%20(73).jpg',
    },
    {
      nombre: 'Folletos y trípticos',
      info: '',
      smallImg: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/8-col/img%20(73).jpg',
      bigImg: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/8-col/img%20(73).jpg',
    },
    {
      nombre: 'Fanzines',
      info: '',
      smallImg: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/8-col/img%20(73).jpg',
      bigImg: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/8-col/img%20(73).jpg',
    },
    {
      nombre: 'Tiras de fotos',
      info: '',
      smallImg: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/8-col/img%20(73).jpg',
      bigImg: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/8-col/img%20(73).jpg',
    },
    {
      nombre: 'Foto Libro',
      info: '',
      smallImg: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/8-col/img%20(73).jpg',
      bigImg: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/8-col/img%20(73).jpg',
    },
    {
      nombre: 'Bitácoras',
      info: '',
      smallImg: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/8-col/img%20(73).jpg',
      bigImg: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/8-col/img%20(73).jpg',
    },
    {
      nombre: 'Impresiones en vegetal',
      info: '',
      smallImg: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/8-col/img%20(73).jpg',
      bigImg: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/8-col/img%20(73).jpg',
    }
  ];

  constructor() { }

  getProducts() {
    return this.products;
  }
}
