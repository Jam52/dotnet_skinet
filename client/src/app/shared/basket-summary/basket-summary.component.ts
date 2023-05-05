import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BasketItem } from '../models/basket';
import { BasketServiceService } from 'src/app/basket/basket-service.service';
import { faPlus, faMinus, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-basket-summary',
  templateUrl: './basket-summary.component.html',
  styleUrls: ['./basket-summary.component.scss']
})
export class BasketSummaryComponent {
  @Output() addItem = new EventEmitter<BasketItem>();
  @Output() removeItem = new EventEmitter<{id: number, quantity: number}>();
  @Input() isBasket = true;

  plus = faPlus;
  minus = faMinus;
  trash = faTrash

  constructor(public basketService: BasketServiceService){}

  addBasketItem(item: BasketItem) {
    this.addItem.emit(item);
  }

  removeBasketItem(id: number, quantity: number = 1) {
    this.removeItem.emit({id, quantity})
  }
  
}
