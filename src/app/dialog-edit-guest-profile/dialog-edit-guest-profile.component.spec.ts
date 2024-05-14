import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditGuestProfileComponent } from './dialog-edit-guest-profile.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../../environments/environment';
import { getFirestore } from 'firebase/firestore';
import { provideFirestore } from '@angular/fire/firestore';
import { FirebaseService } from '../shared/services/firebase/firebase.service';
import { ActivatedRoute } from '@angular/router';





describe('DialogEditGuestProfileComponent', () => {
  let component: DialogEditGuestProfileComponent;
  let fixture: ComponentFixture<DialogEditGuestProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogEditGuestProfileComponent,
        provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
        provideFirestore(() => getFirestore())
      ],
      providers: [
        FirebaseService,
        {
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
      ],
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogEditGuestProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
