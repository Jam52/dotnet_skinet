import { Component, OnInit} from '@angular/core';
import { BasketServiceService } from './basket/basket-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Skinet';

  constructor(private basketService: BasketServiceService) {}

  ngOnInit(): void {
    const basketId = localStorage.getItem('basket_id')
    if (basketId) this.basketService.getBasket(basketId)
  }
}
