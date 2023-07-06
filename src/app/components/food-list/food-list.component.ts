import { Component } from '@angular/core';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent {
  foods: any[] = [
    { id: 1, name: "Pommes", calories: 52, lipids: 0.2, carbohydrates: 14, proteins: 0.3 },
    { id: 2, name: "Bananes", calories: 96, lipids: 0.2, carbohydrates: 23, proteins: 1 },
    { id: 3, name: "Oranges", calories: 43, lipids: 0.1, carbohydrates: 9, proteins: 1 },
    { id: 4, name: "Poires", calories: 57, lipids: 0.2, carbohydrates: 15, proteins: 0.4 },
    { id: 5, name: "Carottes", calories: 41, lipids: 0.2, carbohydrates: 10, proteins: 0.9 },
    { id: 6, name: "Brocolis", calories: 55, lipids: 0.6, carbohydrates: 11, proteins: 3.6 },
    { id: 7, name: "Tomates", calories: 18, lipids: 0.2, carbohydrates: 3.9, proteins: 0.9 },
    { id: 8, name: "Courgettes", calories: 17, lipids: 0.3, carbohydrates: 3.1, proteins: 1.2 },
    { id: 9, name: "Patates douces", calories: 86, lipids: 0.1, carbohydrates: 20.1, proteins: 1.6 },
    { id: 10, name: "Riz brun", calories: 111, lipids: 0.9, carbohydrates: 23.5, proteins: 2.6 },
    { id: 11, name: "Quinoa", calories: 120, lipids: 1.9, carbohydrates: 21.3, proteins: 4.4 },
    { id: 12, name: "Avoine", calories: 389, lipids: 6.9, carbohydrates: 66.3, proteins: 16.9 },
    { id: 13, name: "Lentilles", calories: 116, lipids: 0.4, carbohydrates: 20.1, proteins: 9 },
    { id: 14, name: "Haricots noirs", calories: 339, lipids: 1.4, carbohydrates: 62, proteins: 21.6 },
    { id: 15, name: "Saumon", calories: 206, lipids: 13, carbohydrates: 0, proteins: 22 },
    { id: 16, name: "Poulet", calories: 165, lipids: 3.6, carbohydrates: 0, proteins: 31 },
    { id: 17, name: "Boeuf", calories: 250, lipids: 20, carbohydrates: 0, proteins: 26 },
    { id: 18, name: "Oeufs", calories: 155, lipids: 11, carbohydrates: 1.1, proteins: 13 },
    { id: 19, name: "Fromage", calories: 402, lipids: 33, carbohydrates: 1.3, proteins: 25 },
    { id: 20, name: "Yaourt grec", calories: 133, lipids: 10, carbohydrates: 4.1, proteins: 8 },
    { id: 21, name: "Beurre d'arachide", calories: 588, lipids: 50, carbohydrates: 20, proteins: 25 },
    { id: 22, name: "Amandes", calories: 579, lipids: 50, carbohydrates: 22, proteins: 21 },
    { id: 23, name: "Noix de cajou", calories: 553, lipids: 44, carbohydrates: 30, proteins: 18 },
    { id: 24, name: "Noix de coco", calories: 354, lipids: 33, carbohydrates: 15, proteins: 3.3 },
    { id: 25, name: "Pain complet", calories: 246, lipids: 3.5, carbohydrates: 44, proteins: 10 },
    { id: 26, name: "Pâtes", calories: 131, lipids: 1.3, carbohydrates: 25, proteins: 5 },
    { id: 27, name: "Farine de blé", calories: 364, lipids: 1.2, carbohydrates: 76, proteins: 10 },
    { id: 28, name: "Sucre blanc", calories: 387, lipids: 0, carbohydrates: 99.9, proteins: 0 },
    { id: 29, name: "Miel", calories: 304, lipids: 0, carbohydrates: 82, proteins: 0.3 },
    { id: 30, name: "Chocolat noir", calories: 546, lipids: 31, carbohydrates: 53, proteins: 6 },
    { id: 31, name: "Café", calories: 1, lipids: 0, carbohydrates: 0.3, proteins: 0.1 }
  ];


  selectedFood: any = { id: 0, name: '', calories: 0, lipids: 0, carbohydrates: 0, proteins: 0 };
  isNewFood: boolean = false;
  popupVisible: boolean = false;
  currentUser: any; // Variable to hold the current user data

  constructor(private userService: UserService) {
    this.currentUser = this.userService.getCurrentUser();
    console.log('Utilisateur connecté :', this.currentUser);
  }

  openPopup(food: any | null) {
    if (food) {
      this.selectedFood = { ...food };
      this.isNewFood = false;
    } else {
      this.selectedFood = { id: 0, name: '', calories: 0, lipids: 0, carbohydrates: 0, proteins: 0 };
      this.isNewFood = true;
    }
    this.popupVisible = true;

    // Ajouter une vérification pour l'utilisateur actuel
    if (this.currentUser && this.currentUser.adm) {
      // L'utilisateur actuel a la propriété 'adm' définie
      // Vous pouvez effectuer d'autres actions nécessaires ici
    }
  }

  closePopup() {
    this.popupVisible = false;
  }

  saveChanges() {
    // Trouvez l'index de l'aliment dans le tableau
    const index = this.foods.findIndex(item => item.id === this.selectedFood.id);
  
    if (index !== -1) {
      // Mettez à jour l'aliment dans le tableau
      this.foods[index] = { ...this.selectedFood };
    } else {
      console.error('Aliment non trouvé');
    }
  
    this.popupVisible = false;
  }
  

  addFood() {
    if (this.selectedFood.name) {
      // Generate a new ID for the new food
      const newId = this.foods.length > 0 ? this.foods[this.foods.length - 1].id + 1 : 1;
      const newFood: any = { ...this.selectedFood, id: newId };
      this.foods.push(newFood);
      this.popupVisible = false;
    } else {
      alert('Veuillez entrer un nom pour l\'aliment.');
    }
  }

  deleteFood(food: any) {
    // Recherchez l'index de l'aliment dans le tableau
    const index = this.foods.findIndex(item => item.id === food.id);
    
    if (index !== -1) {
      // Supprimez l'aliment du tableau en utilisant la méthode splice()
      this.foods.splice(index, 1);
    } else {
      console.error('Aliment non trouvé');
    }
  }
}

interface Food {
  id: number;
  name: string;
  calories: number;
  lipids: number;
  carbohydrates: number;
  proteins: number;
}
