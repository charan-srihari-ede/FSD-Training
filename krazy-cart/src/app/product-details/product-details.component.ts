import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import ProductsMock from 'src/mock-data/product.mock';
import { Product } from 'src/models/product.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent {
  productDetails: Product | undefined;
  products: Product[] = ProductsMock;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(this.findProduct.bind(this));
  }

  findProduct(queryParams: any): void {
    const { productId } = queryParams;

    this.productDetails = this.products.find(
      (product) => product.id == productId
    );
  }
}
