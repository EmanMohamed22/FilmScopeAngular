import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentMComponent } from './document-m.component';

describe('DocumentMComponent', () => {
  let component: DocumentMComponent;
  let fixture: ComponentFixture<DocumentMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentMComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
