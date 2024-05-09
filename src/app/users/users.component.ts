import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { User } from '../shared/models/user.class';
import {MatCardModule} from '@angular/material/card';
import { FirebaseService } from '../shared/services/firebase/firebase.service';
import { CommonModule } from '@angular/common';
import { SingleUser } from '../shared/interfaces/singleUser.interface';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MatTooltipModule, DialogAddUserComponent, MatDialogModule, MatCardModule, CommonModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
  dialog = inject(MatDialog)
  user: SingleUser = new User();
  firebaseService = inject(FirebaseService);


  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddUserComponent);
  }

  getRightDateFormat(timestamp: number) {
    let birthdate = new Date(timestamp);
    let month = (birthdate.getMonth() + 1).toString().padStart(2, '0'); // Monat (+1, da die Monate von 0 bis 11 gehen)
    let day = birthdate.getDate().toString().padStart(2, '0'); // Tag
    let year = birthdate.getFullYear().toString(); // Jahr
    return `${month}/${day}/${year}`;
  }

  capitalizeFirstLetter(str: string) {
    return str.split(' ').map(function(word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(' ');
  }
}
