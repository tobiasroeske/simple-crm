import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GuestsComponent } from './guests/guests.component';
import { GuestDetailComponent } from './user-detail/guest-detail.component';

export const routes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'guests', component: GuestsComponent },
    { path: 'guests/:id', component: GuestDetailComponent },
];
