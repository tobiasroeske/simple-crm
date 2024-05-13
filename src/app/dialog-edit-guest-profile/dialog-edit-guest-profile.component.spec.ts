import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditGuestProfileComponent } from './dialog-edit-guest-profile.component';




describe('DialogEditGuestProfileComponent', () => {
  let component: DialogEditGuestProfileComponent;
  let fixture: ComponentFixture<DialogEditGuestProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogEditGuestProfileComponent],
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
