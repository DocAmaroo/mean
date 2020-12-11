import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {UsersService} from '../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {
  public onSigning: boolean;

  public form = new FormGroup({
    firstname: new FormControl('Thomas', Validators.required),
    name: new FormControl('Canta', Validators.required),
    mail: new FormControl('test@gmail.com', Validators.required),
    password: new FormControl('123', Validators.required),
  });

  public errMsg: string;

  constructor(private usersService: UsersService) {
  }

  ngOnInit(): void {
    this.onSigning = true;
  }

  onSubmit(): void {
    this.errMsg = undefined;
    if (this.onSigning) {
      const auth = {mail: this.form.value.mail, password: this.form.value.password};
      this.usersService.signin(auth).subscribe((response: any) => {
        this.usersService.setUser(response);
      }, err => {
        if (err.status === 401) {
          this.errMsg = err.error.message;
        }
      });
    } else {
      this.usersService.signup(this.form.value).subscribe((response: any) => {
        this.usersService.setUser(response);
      }, err => {
        if (err.status === 401) {
          this.errMsg = err.error.message;
        }
      });
    }
  }

  toggleType(): void {
    this.onSigning = !this.onSigning;
  }
}
