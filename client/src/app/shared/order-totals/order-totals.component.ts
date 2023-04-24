import { Component } from '@angular/core';
import { BasketServiceService } from 'src/app/basket/basket-service.service';

@Component({
  selector: 'app-order-totals',
  templateUrl: './order-totals.component.html',
  styleUrls: ['./order-totals.component.scss']
})
export class OrderTotalsComponent {

  constructor(public basketService: BasketServiceService){}

}
