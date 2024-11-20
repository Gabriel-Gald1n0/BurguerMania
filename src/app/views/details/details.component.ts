import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from './../../services/api.service';
import { CardapioItem } from 'src/app/interfaces/CardapioItem.interface';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  productName: string = '';
  Card: CardapioItem | undefined;
  @Input() buttonText: string = 'COMPRAR';

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router, private ApiService: ApiService) {}

  ngOnInit(): void {

    this.route.params.subscribe((params) => {
      this.productName = params['name'];
      this.carregarCardapio();
    });
  }

  // Função para carregar os dados do JSON
  carregarCardapio(): void {
    this.ApiService.carregarCardapio().subscribe((response) => {
      const foundItems = response.data.filter((item: CardapioItem) => item.name === this.productName);
      this.Card = foundItems[0];  // Atribui o primeiro item correspondente
    }, (error) => {
      console.error('Erro ao carregar o JSON:', error);
    });
  }

  GoBuy(): void {
    this.router.navigate(['order']);
  }
}
