import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicSchemaDataComponent } from './basic-schema-data.component';

describe('BasicSchemaDataComponent', () => {
  let component: BasicSchemaDataComponent;
  let fixture: ComponentFixture<BasicSchemaDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicSchemaDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicSchemaDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
