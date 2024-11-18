import { ApiService } from './../../services/api.service';
import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { environment } from '../../../environments/environment';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-productos',
  imports: [CommonModule, FormsModule],
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
})
export class ProductosComponent implements OnInit {
  dataProductos: any[] = [];
  constructor(private apiService: ApiService, private cdr: ChangeDetectorRef) {}
  numerotel = environment.numeroTelefono;
  filteredProducts: any[] = [];
  ngOnInit() {
    this.cargarData();
  }

  cargarData() {
    this.apiService.getProducts().subscribe((data) => {
      this.dataProductos = data;

      console.log(this.dataProductos);

      this.filterProducts();
    });
  }

  /*flattenProducts(products: any[]) {
    let flattenedProducts = products.map((product) => ({
      id: product.id,
      name: product.name,
      price: product.price,
      compareAtPrice: product.compareAtPrice,
      brandName: product.brand.name,
      categoryName: product.categories.name,
      attributes: product.attributes.name,
    }));
    return flattenedProducts;
  }*/
  searchTerm = '';

  filterProducts(): void {
    if (!this.searchTerm) {
      this.filteredProducts = this.dataProductos;
      this.cdr.detectChanges();
      return;
    }
    {
      const searchTermLower = this.searchTerm.toLowerCase();

      console.log('Productos encontrados');

      this.filteredProducts = this.dataProductos.filter((product) => {
        return (
          (product.name &&
            product.name.toLowerCase().includes(searchTermLower)) ||
          (product.price &&
            product.price.toString().includes(searchTermLower)) ||
          (product.compareAtPrice &&
            product.compareAtPrice.toString().includes(searchTermLower)) ||
          (product.brand?.name &&
            product.brand.name.toLowerCase().includes(searchTermLower)) ||
          (product.categories?.name &&
            product.categories.name.toLowerCase().includes(searchTermLower)) ||
          (product.attributes?.name &&
            product.attributes.name.toLowerCase().includes(searchTermLower))
        );
      });
    }
  }
  searchProducts(searchTerm: string): void {
    this.searchTerm = searchTerm.trim().toLowerCase();
    this.filterProducts(); // Llama a la función de filtrado cada vez que cambia el término de búsqueda
  }
  rdon(v: number): number {
    return Math.round(v);
  }
}
