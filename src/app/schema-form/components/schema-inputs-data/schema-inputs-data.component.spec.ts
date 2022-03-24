import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchemaInputsDataComponent } from './schema-inputs-data.component';

describe('SchemaInputsDataComponent', () => {
  let component: SchemaInputsDataComponent;
  let fixture: ComponentFixture<SchemaInputsDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchemaInputsDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchemaInputsDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
