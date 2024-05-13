import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { FirebaseService } from '../shared/services/firebase/firebase.service';
import { CommonModule } from '@angular/common';
import { SingleGuest } from '../shared/interfaces/singleGuest.interface';
import { ActivatedRoute } from '@angular/router';
import { Guest } from '../shared/models/guest.class';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { GuestService } from '../shared/services/guest-service/guest.service';
import { DialogEditGuestProfileComponent } from '../dialog-edit-guest-profile/dialog-edit-guest-profile.component';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [MatCardModule, CommonModule, MatIconModule, MatButtonModule, MatMenuModule, MatDialogModule, DialogEditGuestProfileComponent],
  templateUrl: './guest-detail.component.html',
  styleUrl: './guest-detail.component.scss'
})
export class GuestDetailComponent {
  dialog = inject(MatDialog)
  firebaseService = inject(FirebaseService);
  route = inject(ActivatedRoute);
  guestService = inject(GuestService);
  guest!: SingleGuest;

  ngOnInit(): void {
    this.getGuest();
    
  }

  editGuestProfile() {
    const dialog = this.dialog.open(DialogEditGuestProfileComponent);
    dialog.componentInstance.guest = this.guest //new Guest(this.firebaseService.getCleanJson(this.firebaseService.singleGuest));
  }

  async getGuest() {
    this.guest = new Guest();
    let guestId = this.getGuestId();
    await this.firebaseService.getGuestDetail(guestId);
    this.guest = this.firebaseService.singleGuest;
    this.firebaseService.unsubSingleGuest(guestId)
  }

  getGuestDetail() {
    if (this.firebaseService.singleGuest) {
      return this.firebaseService.singleGuest;
    } else {
      return this.guest;
    }
  }

  getGuestId(): string {
    let guestId = '';
    this.route.params.subscribe((param) => {
      guestId = param['id'];
    })
    return guestId;
  }
}
