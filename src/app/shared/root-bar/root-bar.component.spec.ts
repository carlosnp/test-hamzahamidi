import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RootBarComponent } from './root-bar.component';

describe('RootBarComponent', () => {
  let component: RootBarComponent;
  let fixture: ComponentFixture<RootBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RootBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RootBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
