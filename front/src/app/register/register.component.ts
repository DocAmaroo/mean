import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from '../services/authentification.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public utilisateur = {"name":"", "firstname":"", "mail":"", "password":""};
  public message: string = "";
  
  constructor(private authService: AuthentificationService, private router: Router) { }

  ngOnInit(): void{}

  onSubmit(){
    this.authService.register(this.utilisateur).subscribe(reponse => {
      this.message = reponse['message'];
      if(reponse['resultat']){
        this.authService.connect(this.utilisateur.mail);
        this.router.navigate(['/categories']);
      }
      setTimeout( () => { this.router.navigate(['/categories']); }, 1000);
    });
  }
}