import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestDetailComponent } from './guest-detail.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../../environments/environment';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { FirebaseService } from '../shared/services/firebase/firebase.service';
import { ActivatedRoute, RouterModule, provideRouter } from '@angular/router';

describe('GuestDetailComponent', () => {
  let component: GuestDetailComponent;
  let fixture: ComponentFixture<GuestDetailComponent>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuestDetailComponent, RouterModule,
        provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
        provideFirestore(() => getFirestore())
      ],
      providers: [FirebaseService, {
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
      }]
    })
      .compileComponents();

    fixture = TestBed.createComponent(GuestDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
