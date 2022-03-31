import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchemaRefComponent } from './schema-ref.component';

describe('SchemaRefComponent', () => {
  let component: SchemaRefComponent;
  let fixture: ComponentFixture<SchemaRefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchemaRefComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchemaRefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
