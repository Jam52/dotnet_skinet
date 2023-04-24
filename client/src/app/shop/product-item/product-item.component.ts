import { Component, Input } from '@angular/core';
import { Product } from 'src/app/shared/models/product';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { BasketServiceService } from 'src/app/basket/basket-service.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent {
  Cart = faShoppingCart;
  @Input() product?: Product;

  constructor(private basketService: BasketServiceService) {}

  addItemToBasket() {
    this.product && this.basketService.addItemToBasket(this.product)
  }
}
