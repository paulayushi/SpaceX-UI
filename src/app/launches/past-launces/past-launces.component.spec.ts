import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastLauncesComponent } from './past-launces.component';

describe('PastLauncesComponent', () => {
  let component: PastLauncesComponent;
  let fixture: ComponentFixture<PastLauncesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PastLauncesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PastLauncesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
