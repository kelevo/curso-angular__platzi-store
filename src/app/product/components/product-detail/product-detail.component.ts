import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ProductsService } from '../../../core/services/products/products.service';
import { Product } from 'src/app/core/models/product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    // Recibimos datos
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.fetchProduct(id);
      //this.product = this.productsService.getProduct(id);
    });
  }

  fetchProduct(id: string) {
    this.productsService.getProduct(id)
    .subscribe(product => {
      this.product = product;
    })
  }

  createProduct() {

    const newProduct: Product = {
      id: '2222',
      title: 'nuevo desde angular',
      image: 'assets/images/stickers1.png',
      price: 3000,
      description: 'nuevo producto'
    }

    this.productsService.createProduct(newProduct)
    .subscribe(product => {
      console.log(product);
    })
  }

  updateProduct() {
    const updateProduct: Partial<Product> = {
      price: 5000,
      description: 'edicion desde angular'
    }

    this.productsService.updateProduct('2', updateProduct)
    .subscribe(product => {
      console.log(product);
    })
  }

  deleteProduct() {
    this.productsService.deleteProduct('3')
    .subscribe(rta => {
      console.log(rta);
    })
  }
}
