import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminWalletScreenComponent } from './admin-wallet-screen.component';

describe('AdminWalletScreenComponent', () => {
  let component: AdminWalletScreenComponent;
  let fixture: ComponentFixture<AdminWalletScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminWalletScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminWalletScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
