import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Guest } from '../shared/models/guest.class';
import {MatCardModule} from '@angular/material/card';
import { FirebaseService } from '../shared/services/firebase/firebase.service';
import { CommonModule } from '@angular/common';
import { SingleGuest } from '../shared/interfaces/singleGuest.interface';
import { RouterLink, RouterOutlet } from '@angular/router';
import { GuestService } from '../shared/services/guest-service/guest.service';

@Component({
  selector: 'app-guests',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MatTooltipModule, DialogAddUserComponent, MatDialogModule, MatCardModule, CommonModule, RouterOutlet, RouterLink],
  templateUrl: './guests.component.html',
  styleUrl: './guests.component.scss'
})
export class GuestsComponent {
  dialog = inject(MatDialog)
  guest: Guest = new Guest();
  firebaseService = inject(FirebaseService);
  guestService = inject(GuestService);


  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddUserComponent);
  }
  
}
