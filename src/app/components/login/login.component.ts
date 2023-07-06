import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router, private userService: UserService) { }

  login(): void {
    this.userService.getFirstUtilisateur().subscribe(
      (response) => {
        console.log('Premier enregistrement de la table utilisateur:', response);
        // Autres actions à effectuer avec la réponse
      },
      (error) => {
        console.error('Erreur lors de la récupération du premier enregistrement:', error);
      }
    );
     if (this.email && this.password) {
       this.authService.authenticate(this.email, this.password).subscribe(
         (user) => {
           console.log('Authentification réussie');
           this.userService.setCurrentUser(user); 
           this.router.navigate(['/food-list']);
         },
         (error) => {
           this.errorMessage = 'Adresse e-mail ou mot de passe incorrect.';
         }
       );
     } else {
       this.errorMessage = 'Veuillez remplir tous les champs.';
     }
  }
}
