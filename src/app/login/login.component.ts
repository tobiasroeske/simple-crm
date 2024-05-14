
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatCard, MatCardModule } from '@angular/material/card';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from '../shared/services/auth-service/auth.service';
import { User } from '../shared/models/user.class';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatCard, MatCardModule, FormsModule, MatFormField, MatInput, MatLabel, MatButton, RouterLink, RouterOutlet],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  authService = inject(AuthService);
  user: User = new User();
  router = inject(Router);

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid) {
      this.authService.login(this.user.email, this.user.password)
      .subscribe(() => {
        this.router.navigateByUrl('dashboard');
      })
    }
    
  }

}
