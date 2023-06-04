import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComedyMComponent } from './comedy-m.component';

describe('ComedyMComponent', () => {
  let component: ComedyMComponent;
  let fixture: ComponentFixture<ComedyMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComedyMComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComedyMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
