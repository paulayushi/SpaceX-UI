import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunceDetailsComponent } from './launce-details.component';

describe('LaunceDetailsComponent', () => {
  let component: LaunceDetailsComponent;
  let fixture: ComponentFixture<LaunceDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaunceDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
