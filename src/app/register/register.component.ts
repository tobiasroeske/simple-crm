import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatCard, MatCardModule } from '@angular/material/card';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { AuthService } from '../shared/services/auth-service/auth.service';
import { Router } from '@angular/router';
import { User } from '../shared/models/user.class';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [MatCard, MatCardModule, FormsModule, MatFormField, MatInput, MatLabel, MatButton, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  authService = inject(AuthService);
  router = inject(Router)
  user: User = new User()
  

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid) {
    this.authService.register(this.user.email, this.user.username, this.user.password).subscribe(() => {
      this.router.navigateByUrl('login');
    })
  }
  }
}
