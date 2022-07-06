import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldStylesFormComponent } from './field-styles-form.component';

describe('FieldStylesFormComponent', () => {
  let component: FieldStylesFormComponent;
  let fixture: ComponentFixture<FieldStylesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FieldStylesFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FieldStylesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
