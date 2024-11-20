import { Router } from '@angular/router';
import { Component} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private router: Router) {}
  buttonText = 'Acessar Cardapio';

  GoOrders(){
    this.router.navigate(['order']);
  }
  GoMenu(){
    this.router.navigate(['/menu']);
  }
}
