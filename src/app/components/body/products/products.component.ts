import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductsService, Product } from '../../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html'
})
export class ProductsComponent implements OnInit {
  @Output() selectedProduct: EventEmitter<number>;
  products: Product[] = [];

  constructor(private _productsService: ProductsService) {
    this.selectedProduct = new EventEmitter();
  }

  ngOnInit() {
    this.products = this._productsService.getProducts();
  }

  sendProduct( idx: number ) {
    this.selectedProduct.emit( idx );
  }

}
