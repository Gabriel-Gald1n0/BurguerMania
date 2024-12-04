import { Component, Input,OnInit } from '@angular/core';
import { Order } from 'src/app/interfaces/Order.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './../../services/api.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  @Input() buttonText: string = 'FINALIZAR';

  order: Order = {
    produto1: '',
    quantidade1: 0,
    produto2: '',
    quantidade2: 0,
    observacao: ''
  };

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router, private ApiService: ApiService) {}

  ngOnInit(): void {
    // Capturar o nome do produto da URL
    this.route.params.subscribe((params) => {
      const productName = params['name'];
      this.order.produto1 = this.order.produto2  = productName;
    });
  }

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
