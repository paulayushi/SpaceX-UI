import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LauncesComponent } from './launces.component';

describe('LauncesComponent', () => {
  let component: LauncesComponent;
  let fixture: ComponentFixture<LauncesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LauncesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LauncesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
