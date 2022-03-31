import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchemaMultippleComponent } from './schema-multipple.component';

describe('SchemaMultippleComponent', () => {
  let component: SchemaMultippleComponent;
  let fixture: ComponentFixture<SchemaMultippleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchemaMultippleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchemaMultippleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
