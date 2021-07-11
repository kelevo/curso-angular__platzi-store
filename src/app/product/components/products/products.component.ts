import { Component, OnInit } from '@angular/core';

// Importacion de modelo para los productos
import { Product } from '../../../core/models/product.model';
import { ProductsService } from 'src/app/core/services/products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  // Trabajando con objetos
  products: Product[] = [];

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.fetchProducts();
  }

  // Metodo que recibe el evento emitido del componente product
  clickProduct(id: number) {
    console.log(`product ${id}`);
  }

  fetchProducts() {
    this.productsService.getAllProducts()
    .subscribe(products => {
      this.products = products;
    });
  }
}
