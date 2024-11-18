import { HttpClient, HttpParams } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';
interface State {
  loading: boolean;
  data: any[];
}
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = environment.apiUrl; // URL base de tu API
  sedepadre = environment.sedepadre;
  private http = inject(HttpClient);
  //#state = signal<State>({ loading: true, data: [] });
  // #stated = signal<State>({ loading: true, data: [] });

  //public users = computed(() => this.#state().data);
  //public user = computed(() => this.#state().data);
  constructor() {}
  getProducts(): Observable<any> {
    const param = { idsede: this.sedepadre, sedeh: '0', cate: '', tipo: '4' };
    return this.http.post<any[]>(this.apiUrl + 'webproductoslasted', param);
  }

  getProductById(productId: string): Observable<any> {
    const params = new HttpParams().set('id', productId).set('tipo', '4');

    return this.http.get<any>(`${this.apiUrl}webproducto`, { params }); // Retorna el Observable
  }
}
