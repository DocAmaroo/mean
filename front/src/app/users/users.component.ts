import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersService } from '../services/users.service';

@Component({
	selector: 'app-users',
	templateUrl: './users.component.html',
	styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

	public onSignin: Boolean;
	
	form = new FormGroup({
		firstname: new FormControl('Thomas', Validators.required),
		name: new FormControl('Canta', Validators.required),
		mail: new FormControl('test@gmail.com', Validators.required),
		password: new FormControl('123', Validators.required),
	});

	constructor(private _usersService: UsersService) { }

	ngOnInit(): void {
		this.onSignin = false;
	}

	onSubmit() {
		if(this.onSignin) {
			this._usersService.register(this.form.value).subscribe( (response:any) => {
				this._usersService.setUser(response._id);
				console.log("Vous avez été enregistrée ! Vous êtes connecté");
			});
		} else {
			let auth = {"mail":this.form.value.mail, "password":this.form.value.password};
			this._usersService.connect(auth).subscribe( (response:any) => {
				this._usersService.setUser(response._id);
				console.log("Vous êtes connecté");
			})
		}
	}

	toggleType() {
		this.onSignin = !this.onSignin;
	}
}
