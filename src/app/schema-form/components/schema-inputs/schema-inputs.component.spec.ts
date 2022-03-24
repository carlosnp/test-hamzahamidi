import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchemaInputsComponent } from './schema-inputs.component';

describe('SchemaInputsComponent', () => {
  let component: SchemaInputsComponent;
  let fixture: ComponentFixture<SchemaInputsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchemaInputsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchemaInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
