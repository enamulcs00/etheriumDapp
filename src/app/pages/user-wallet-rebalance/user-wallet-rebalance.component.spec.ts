import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserWalletRebalanceComponent } from './user-wallet-rebalance.component';

describe('UserWalletRebalanceComponent', () => {
  let component: UserWalletRebalanceComponent;
  let fixture: ComponentFixture<UserWalletRebalanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserWalletRebalanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserWalletRebalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
