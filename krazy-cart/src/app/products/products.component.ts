import { Component } from '@angular/core';
import ProductsMock from 'src/mock-data/product.mock';
import { Product } from 'src/models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  products: Product[] = ProductsMock;
}
