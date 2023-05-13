import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllLauncesComponent } from './all-launces.component';

describe('AllLauncesComponent', () => {
  let component: AllLauncesComponent;
  let fixture: ComponentFixture<AllLauncesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllLauncesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllLauncesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
