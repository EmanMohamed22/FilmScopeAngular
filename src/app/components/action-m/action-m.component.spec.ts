import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionMComponent } from './action-m.component';

describe('ActionMComponent', () => {
  let component: ActionMComponent;
  let fixture: ComponentFixture<ActionMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionMComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActionMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
