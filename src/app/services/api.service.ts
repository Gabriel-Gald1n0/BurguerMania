import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  ApiUrl = '/assets/data/comidas.json';
  FormApiUrl = 'API_URL';

  constructor(private http: HttpClient) {}

  carregarCardapio(): Observable<any> {
    return this.http.get<any>(this.ApiUrl);
  }
}
