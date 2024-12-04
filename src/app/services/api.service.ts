import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  ApiUrl = 'https://localhost:5056/api/Categorys/GetCategorys'; // Coloque aqui seu localhost
  ApiProdutoUrl = 'https://localhost:5056/api/Products/GetProducts';// Coloque aqui seu localhost
  FormApiUrl = 'API_URL';

  constructor(private http: HttpClient) {}

  carregarCardapio(): Observable<any> {
    return this.http.get<any>(this.ApiUrl);
  }

  carregarProduto(): Observable<any> {
    return this.http.get<any>(this.ApiProdutoUrl);
  }
}
