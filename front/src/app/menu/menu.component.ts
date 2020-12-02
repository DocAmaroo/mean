import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UsersService} from '../services/users.service';
import {Observable} from 'rxjs';
import {UserModel} from '../model/user.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public user: Observable<UserModel>;
  public username: Observable<string>;

  constructor(private usersService: UsersService,
              private router: Router) {

    this.user = this.usersService.getUser();
    this.username = this.usersService.getUsername();
  }

  ngOnInit(): void {
    this.router.navigate(['/categories']);
  }

  disconnect(): void {
    this.usersService.disconnect();
    this.router.navigate(['/categories']);
  }
}
