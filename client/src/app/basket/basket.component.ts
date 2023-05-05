import { Component } from '@angular/core';
import { BasketServiceService } from './basket-service.service';
import { faPlus, faMinus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { BasketItem } from '../shared/models/basket';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent {
  plus = faPlus;
  minus = faMinus;
  trash = faTrash

  constructor(public basketService: BasketServiceService) {}

  incrementQuantity(item: BasketItem) {
    this.basketService.addItemToBasket(item)
  }

  removeItem(event: {id: number, quantity: number}) {
    this.basketService.removeItemFromBasket(event.id, event.quantity)
  }

}
