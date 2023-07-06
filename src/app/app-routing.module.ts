import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
 import { FoodListComponent } from './components/food-list/food-list.component';
// import { MealTrackerComponent } from './components/meal-tracker/meal-tracker.component';
// import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirection par défaut vers la page de connexion
  { path: 'login', component: LoginComponent },
  { path: 'food-list', component: FoodListComponent },
  // { path: 'meal-tracker', component: MealTrackerComponent },
  // { path: 'admin-panel', component: AdminPanelComponent },
  // Ajoutez d'autres routes selon vos besoins
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
