import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/shared/interfaces/product.interface';
import { OrderService } from 'src/app/shared/services/order.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  basket: Array<IProduct> = [];
  totalPrice = 0;
  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.getLocalProducts();
    this.checkMyBasket();
  }
  private checkMyBasket(): void {
    this.orderService.basket.subscribe(
      data => {
        this.basket = data;
        this.totalPrice = this.orderService.getTotal(this.basket);
      }
    );
  }

  private getLocalProducts(): void {
    if (localStorage.getItem('basket')){
      this.basket = JSON.parse(localStorage.getItem('basket'));
      this.totalPrice = this.orderService.getTotal(this.basket);
    }
  }

}
