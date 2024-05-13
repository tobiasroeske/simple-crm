import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MatDialogActions, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FirebaseService } from '../shared/services/firebase/firebase.service';
import { ActivatedRoute } from '@angular/router';
import { SingleGuest } from '../shared/interfaces/singleGuest.interface';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-dialog-edit-guest-profile',
  standalone: true,
  imports: [MatDialogTitle, MatDialogContent, FormsModule, CommonModule, MatFormField, MatInputModule, MatDialogActions, MatButtonModule],
  templateUrl: './dialog-edit-guest-profile.component.html',
  styleUrl: './dialog-edit-guest-profile.component.scss'
})
export class DialogEditGuestProfileComponent {
  firebaseService = inject(FirebaseService);
  route = inject(ActivatedRoute);
  dialogRef = inject(MatDialogRef<DialogEditGuestProfileComponent>)
  guest!: SingleGuest;
  loading = false;

  constructor() {
    console.log(this.guest);
    
  }

  editGuestProfile() {
    console.log('guest to update: ',this.guest);
    this.firebaseService.updateGuest(this.guest);
    console.log('edited');
  }

  getGuest() {
    if (this.firebaseService.singleGuest) {
      return this.firebaseService.singleGuest;
    } else {
      return this.guest;
    }
  }

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid) {
      this.editGuestProfile();
      this.closeDialog(ngForm);
    }
  }

  closeDialog(ngForm: NgForm) {
    ngForm.resetForm();
    this.dialogRef.close();
  }
}
