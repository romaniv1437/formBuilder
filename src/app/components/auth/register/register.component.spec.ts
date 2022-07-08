import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterTestingModule} from "@angular/router/testing";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterComponent ],
      imports: [
        HttpClientModule,
        RouterTestingModule,
        MatCardModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        FormsModule,
        MatInputModule,
        BrowserAnimationsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should render register form', () => {
    const loginForm: HTMLElement = fixture.nativeElement
    const title = loginForm.querySelector('h2')!;
    const emailInput = loginForm.querySelector('#email')!;
    const passwordInput = loginForm.querySelector('#password');
    const submitButton = loginForm.querySelector('button')!;
    const helpText = loginForm.querySelector('p')!;
    expect(title.textContent).toEqual('Registration');
    expect(emailInput).toBeTruthy();
    expect(passwordInput).toBeTruthy();
    expect(submitButton.textContent).toEqual('Submit');
    expect(helpText.textContent).toEqual('Already have account? Log in')
  });
});
