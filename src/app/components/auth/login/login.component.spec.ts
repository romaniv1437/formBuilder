import {ComponentFixture, TestBed} from '@angular/core/testing';

import {LoginComponent} from './login.component';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientModule} from "@angular/common/http";

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent],
      imports: [
        HttpClientModule,
        RouterTestingModule,
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should render login form', () => {
    const loginForm: HTMLElement = fixture.nativeElement
    const title = loginForm.querySelector('h2')!;
    const emailInput = loginForm.querySelector('#email')!;
    const passwordInput = loginForm.querySelector('#password');
    const submitButton = loginForm.querySelector('button')!;
    const helpText = loginForm.querySelector('p')!;
    expect(title.textContent).toEqual('Login');
    expect(emailInput).toBeTruthy();
    expect(passwordInput).toBeTruthy();
    expect(submitButton.textContent).toEqual('Submit');
    expect(helpText.textContent).toEqual('Do not have account? Register')
  })
});
