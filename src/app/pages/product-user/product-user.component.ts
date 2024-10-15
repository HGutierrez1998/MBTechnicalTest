import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-user',
  standalone: true,
  imports: [],
  templateUrl: './product-user.component.html',
  styleUrl: './product-user.component.scss'
})
export default class ProductUserComponent {

  constructor(private router : Router) {

  }

  navigateToUserShop() : void {
    this.router.navigate(['/layout/user-shopp']);
  }

}
