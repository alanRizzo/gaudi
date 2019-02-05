import { Component } from '@angular/core';
import { ProductsService, Product} from '../../services/products.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html'
})
export class BodyComponent {
  product: Product;
  nombre: string;
  idMod: string;

  constructor(private _productsService: ProductsService) {
  }

  theProduct( idx: number ) {
    this.product = this._productsService.getProduct(idx);
    this.idMod = idx + 'mod';
  }
}
