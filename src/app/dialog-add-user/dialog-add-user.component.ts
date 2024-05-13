import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
  MatDialogRef,
} from '@angular/material/dialog';
import { FormsModule, NgForm } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { Guest } from '../shared/models/guest.class';
import { CommonModule } from '@angular/common';
import { FirebaseService } from '../shared/services/firebase/firebase.service';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { updateDoc } from '@angular/fire/firestore';



@Component({
  selector: 'app-dialog-add-user',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatDatepickerModule,
    CommonModule,
    MatProgressBarModule,
    MatSelectModule],
  templateUrl: './dialog-add-user.component.html',
  styleUrl: './dialog-add-user.component.scss'
})
export class DialogAddUserComponent {
  guest = new Guest();
  dateOfArrival!: Date;
  dateOfLeaving!: Date;
  firebaseService = inject(FirebaseService);
  dialogRef = inject(MatDialogRef<DialogAddUserComponent>)
  loading: boolean = false;

  async saveUser() {
    this.loading = true;
    this.guest.arrivalDate = this.dateOfArrival.getTime();
    this.guest.leavingDate = this.dateOfLeaving.getTime();
    console.log('Guest before saving: ', this.guest);
    await this.firebaseService.addUser(this.guest)
      .then(result => {
        this.loading = false
      })
  }

  closeDialog(ngForm: NgForm) {
    ngForm.resetForm();
    this.dialogRef.close();
  }

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid) {
      this.saveUser();
      this.closeDialog(ngForm);
    }
  }

}
