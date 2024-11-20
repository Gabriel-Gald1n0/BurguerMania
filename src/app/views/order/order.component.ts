import { Component, Input } from '@angular/core';
import { Order } from 'src/app/interfaces/Order.interface';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './../../services/api.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
  @Input() buttonText: string = 'FINALIZAR';

  order: Order = {
    produto1: '',
    quantidade1: 0,
    produto2: '',
    quantidade2: 0,
    observacao: ''
  };

  constructor(private http: HttpClient, private ApiService: ApiService) {}
  // Função para enviar o pedido
  onSubmit() {
    console.log('Pedido enviado:', this.order);
    console.log(this.ApiService.FormApiUrl);
    /*
    this.http.post(this.ApiService.FormApiUrl, this.order).subscribe({
      next: (response) => {
        console.log('Pedido enviado com sucesso:', response);
        alert('Pedido enviado com sucesso!');
      },
      error: (error) => {
        console.error('Erro ao enviar pedido:', error);
        alert('Erro ao enviar o pedido. Tente novamente.');
      }
    });
    */
  }

}
