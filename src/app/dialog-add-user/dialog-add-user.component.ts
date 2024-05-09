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
import { User } from '../shared/models/user.class';
import { CommonModule } from '@angular/common';
import { FirebaseService } from '../shared/services/firebase/firebase.service';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';



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
  user = new User();
  dateOfArrival!: Date;
  dateOfLeaving!: Date;
  firebaseService = inject(FirebaseService);
  dialogRef = inject(MatDialogRef<DialogAddUserComponent>)
  loading: boolean = false;



  async saveUser() {
    this.loading = true;

    this.user.arrivalDate = this.dateOfArrival.getTime();
    this.user.leavingDate = this.dateOfLeaving.getTime();
    await this.firebaseService.addUser(this.user.toJson())
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
