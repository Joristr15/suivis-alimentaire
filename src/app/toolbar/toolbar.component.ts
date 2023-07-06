import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {
  currentUser: any;

  constructor(private userService: UserService, private router: Router) {
    this.currentUser = this.userService.getCurrentUser();
  }

  logout(): void {
    localStorage.clear();
    this.userService.clearCurrentUser();
    this.router.navigate(['/login']);
  }
}
