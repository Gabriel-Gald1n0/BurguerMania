import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CardapioItem } from 'src/app/interfaces/CardapioItem.interface';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  allCards: CardapioItem[] = [];
  visibleCards: CardapioItem[] = [];
  buttonText: string = 'Ver cardápio completo';
  isExpanded = false;
  constructor(private http: HttpClient, private router: Router, private ApiService: ApiService,) {}

  ngOnInit(): void {
    this.carregarCardapio();
  }

  // Função para carregar os dados do JSON
  carregarCardapio(): void {
    this.ApiService.carregarCardapio().subscribe((response) => {
      this.allCards = response.dados.filter((item: CardapioItem) => item.category == null);
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

  GoProduct(cardapioName: string): void {
    this.router.navigate(['/product', cardapioName]);
  }
}
