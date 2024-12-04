import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from './../../services/api.service';
import { CardapioItem } from 'src/app/interfaces/CardapioItem.interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  allCards: CardapioItem[] = [];
  visibleCards: CardapioItem[] = [];
  buttonText: string = 'Ver cardápio completo';
  isExpanded = false;

  productName: string = '';

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router, private ApiService: ApiService) {}

  ngOnInit(): void {

    this.route.params.subscribe((params) => {
      this.productName = params['name'];
      this.carregarCardapio();
    });
  }

  // Função para carregar os dados do JSON
  carregarCardapio(): void {
    this.ApiService.carregarProduto().subscribe((response) => {
      this.allCards = response.dados.filter((item: CardapioItem) => item.categoryName === this.productName);
      this.visibleCards = this.allCards.slice(0, 3);
    }, (error) => {
      console.error('Erro ao carregar o JSON:', error);
    });
  }


  toggleCardapio(): void {
    this.isExpanded = !this.isExpanded;

    if (this.isExpanded) {
      this.visibleCards = this.allCards;
      this.buttonText = 'Ver menos';
    } else {
      this.visibleCards = this.allCards.slice(0, 3);
      this.buttonText = 'Ver cardápio completo';
    }
  }

  GoDetails(cardapioName: string): void {
    this.router.navigate(['/details', cardapioName]);
  }
}
