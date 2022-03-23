import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicSchemaComponent } from './basic-schema.component';

describe('BasicSchemaComponent', () => {
  let component: BasicSchemaComponent;
  let fixture: ComponentFixture<BasicSchemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicSchemaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicSchemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
