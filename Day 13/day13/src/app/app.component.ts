import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { StudentListComponent } from './student-list.component';
import { ProductsComponent } from './products.component';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  imports: [NgIf, FormsModule, StudentListComponent, ProductsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Task Day 13 - Mohamed Samy';
  username = '';
  password = '';
  errorMessage = '';

  isLoggedIn = computed(() => this.auth.isAuthenticated());

  constructor(public auth: AuthService) {}

  login(): void {
    this.errorMessage = '';
    const ok = this.auth.login(this.username.trim(), this.password);
    if (!ok) {
      this.errorMessage = 'Invalid username or password';
    } else {
      this.username = '';
      this.password = '';
    }
  }

  logout(): void {
    this.auth.logout();
  }
}
