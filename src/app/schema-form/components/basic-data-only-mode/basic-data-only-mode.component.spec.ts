import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicDataOnlyModeComponent } from './basic-data-only-mode.component';

describe('BasicDataOnlyModeComponent', () => {
  let component: BasicDataOnlyModeComponent;
  let fixture: ComponentFixture<BasicDataOnlyModeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicDataOnlyModeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicDataOnlyModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
