import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvertDaiComponent } from './convert-dai.component';

describe('ConvertDaiComponent', () => {
  let component: ConvertDaiComponent;
  let fixture: ComponentFixture<ConvertDaiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConvertDaiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvertDaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
