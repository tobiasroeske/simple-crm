import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestsComponent } from './guests.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../../environments/environment';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { FirebaseService } from '../shared/services/firebase/firebase.service';
import { GuestService } from '../shared/services/guest-service/guest.service';
import { ActivatedRoute } from '@angular/router';


describe('GuestsComponent', () => {
  let component: GuestsComponent;
  let fixture: ComponentFixture<GuestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuestsComponent,
        provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
        provideFirestore(() => getFirestore())
      ],
      providers: [
        FirebaseService, GuestService, {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get(): string {
                  return '123';
                },
              },
            },
          },
        }
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GuestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
