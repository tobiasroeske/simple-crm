import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from './shared/services/auth-service/auth.service';



@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [CommonModule, RouterOutlet, MatToolbarModule, MatIconModule, MatSidenavModule, MatButtonModule, RouterLink]
})
export class AppComponent implements OnInit {
  //title = 'simple-crm';
  routePath: any;
  loggedIn = false;
  authService = inject(AuthService);
  router = inject(Router);

  ngOnInit(): void {
    this.authService.getCurrentUserState()
    // this.authService.user$.subscribe(user => {
    //   if (user) {
    //     this.authService.currentUserSig.set({
    //       email: user.email!,
    //       username: user.displayName!
    //     })
    //   } else {
    //     this.authService.currentUserSig.set(null)
    //     this.router.navigateByUrl('');
    //   }
    //   console.log(this.authService.currentUserSig());
      
    // });
  }

  logout() {
    this.authService.logout().subscribe(() => {
      this.router.navigateByUrl('')
    })
  }

}
