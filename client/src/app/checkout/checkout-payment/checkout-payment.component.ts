import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BasketServiceService } from 'src/app/basket/basket-service.service';
import { CheckoutService } from '../checkout.service';
import { ToastrService } from 'ngx-toastr';
import { Basket } from 'src/app/shared/models/basket';
import { Address } from 'src/app/shared/models/user';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-checkout-payment',
  templateUrl: './checkout-payment.component.html',
  styleUrls: ['./checkout-payment.component.scss'],
})
export class CheckoutPaymentComponent {
  @Input() checkoutForm?: FormGroup;

  constructor(
    private router: Router,
    private basketService: BasketServiceService,
    private checkoutService: CheckoutService,
    private toastr: ToastrService
  ) {}

  submitOrder() {
    const basket = this.basketService.getCurrentBasketValue();
    if (!basket) return;
    const orderToCreate = this.getOrderToCreate(basket);

    if (!orderToCreate) return;
    this.checkoutService.createOrder(orderToCreate).subscribe({
      next: (order) => {
        this.toastr.success('Order Created Successfully');
        console.log(order);
        this.basketService.deleteLocalBasket();
        const navigationExtras: NavigationExtras = {state: order};
        this.router.navigate(['checkout/success'], navigationExtras);
      },
    });
  }

  private getOrderToCreate(basket: Basket) {
    const deliveryMethod = this.checkoutForm
      ?.get('deliveryForm')
      ?.get('deliveryMethod')?.value;
    const shipToAddress = this.checkoutForm?.get('addressForm')
      ?.value as Address;
    console.log(deliveryMethod);
    if (!deliveryMethod || !shipToAddress) return;
    return {
      basketId: basket.id,
      deliveryMethodId: deliveryMethod,
      shipToAddress: shipToAddress,
    };
  }
}
