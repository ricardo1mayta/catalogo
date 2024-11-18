import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css'],
})
export class ProductoComponent implements OnInit {
  product: any; // Variable para almacenar el producto
  productId: string = ''; // Ejemplo de ID de producto
  numerotel = environment.numeroTelefono;
  public dataProductos = inject(ApiService);
  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.productId = params['id'];

      this.apiService.getProductById(this.productId).subscribe((product) => {
        this.product = product; // Asigna el producto directamente
        console.log(this.product);
        this.cdr.detectChanges();
      });
    });
  }
  rdon(v: number): number {
    return Math.round(v);
  }
}
