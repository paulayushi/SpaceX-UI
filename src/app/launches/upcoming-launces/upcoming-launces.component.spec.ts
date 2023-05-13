import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingLauncesComponent } from './upcoming-launces.component';

describe('UpcomingLauncesComponent', () => {
  let component: UpcomingLauncesComponent;
  let fixture: ComponentFixture<UpcomingLauncesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpcomingLauncesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingLauncesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
