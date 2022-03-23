import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseSchemaComponent } from './base-schema.component';

describe('BaseSchemaComponent', () => {
  let component: BaseSchemaComponent;
  let fixture: ComponentFixture<BaseSchemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseSchemaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseSchemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
