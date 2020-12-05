import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from '../services/authentification.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  public utilisateur = {"mail":"", "password":""};
  public message: string = "";

  constructor(private authService: AuthentificationService, private router: Router) { }

  ngOnInit(): void{}

  onSubmit(){
    this.authService.verificationConnexion(this.utilisateur).subscribe(reponse => {
      this.message = reponse['message'];
      if(reponse['resultat']){
        this.authService.connect(this.utilisateur.mail);
        this.router.navigate(['/categories']);
      }
      setTimeout( () => { this.router.navigate(['/categories']); }, 1000);
    });
  }

}
