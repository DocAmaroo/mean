import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {UsersService} from '../services/users.service';
import {CartsService} from '../services/carts.service';
import {UserModel} from '../model/user.model';
import {CartModel} from '../model/cart.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public user: Observable<UserModel>;
  public username: string;
  public cart$: Observable<CartModel>;

  constructor(private usersService: UsersService,
              private cartsService: CartsService,
              private router: Router) {

    this.user = this.usersService.getUser();
  }

  ngOnInit(): void {
    this.router.navigate(['/categories']);
    if (this.user !== undefined) {
      this.user.subscribe(response => {
        if (response != null) {
          this.username = response.firstname;
        }
      });
    }
  }

  showCart(): void {
    this.cartsService.showCart();
  }

  disconnect(): void {
    this.usersService.disconnect();
    this.router.navigate(['/categories']);
  }
}
