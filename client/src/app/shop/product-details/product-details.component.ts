import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/product';
import { ShopService } from '../shop.service';
import { ActivatedRoute } from '@angular/router';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  plus = faPlus
  minus = faMinus
  product?: Product

  constructor(private shopService: ShopService, private activeatedRoute: ActivatedRoute) {}
  
  ngOnInit(): void {
    this.loadProduct()
  }

  loadProduct() {
    const id = this.activeatedRoute.snapshot.paramMap.get('id')
    console.log(id)
    if (id) this.shopService.getProduct(+id).subscribe({
      next: product => this.product = product,
      error: error => console.log(error)
    })
  }

}
