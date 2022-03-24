import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchemaChoicesComponent } from './schema-choices.component';

describe('SchemaChoicesComponent', () => {
  let component: SchemaChoicesComponent;
  let fixture: ComponentFixture<SchemaChoicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchemaChoicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchemaChoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
