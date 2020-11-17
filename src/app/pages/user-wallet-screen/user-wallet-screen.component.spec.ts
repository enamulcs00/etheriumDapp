import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserWalletScreenComponent } from './user-wallet-screen.component';

describe('UserWalletScreenComponent', () => {
  let component: UserWalletScreenComponent;
  let fixture: ComponentFixture<UserWalletScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserWalletScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserWalletScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
