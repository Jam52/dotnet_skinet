import { Component } from '@angular/core';
import { faShoppingCart, faSignOutAlt, faAddressBook } from '@fortawesome/free-solid-svg-icons';
import { AccountService } from 'src/app/account/account.service';
import { BasketServiceService } from 'src/app/basket/basket-service.service';
import { BasketItem } from 'src/app/shared/models/basket';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  Cart = faShoppingCart;
  logout = faSignOutAlt;
  orders = faAddressBook;

  constructor(public basketService: BasketServiceService, public accountService: AccountService) {}

  getCount(items: BasketItem[]) {
    return items.reduce((sum, item) => sum + item.quantity, 0)
  }
}
