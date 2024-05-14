import { TestBed } from '@angular/core/testing';

import { GuestService } from './guest.service';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { environment } from '../../../../environments/environment';
import { FirebaseService } from '../firebase/firebase.service';
import { ActivatedRoute } from '@angular/router';

describe('GuestService', () => {
  let service: GuestService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
        provideFirestore(() => getFirestore())
      ],
      providers: [FirebaseService, GuestService, {
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
    });
    service = TestBed.inject(GuestService);
    
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
