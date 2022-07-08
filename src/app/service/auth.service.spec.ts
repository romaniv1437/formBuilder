import {fakeAsync, TestBed} from '@angular/core/testing';

import {AuthService} from './auth.service';
import {HttpClientModule} from "@angular/common/http";
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";

describe('AuthService', () => {
  let service: AuthService;
  let mockService: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule]
    });
    service = TestBed.inject(AuthService);
    mockService = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should login', fakeAsync(() => {
    const mockToken = 'fakeJWT'
    service.loginUser({email: 'testEmail', password: 'testPassword'})
      .subscribe(
        token => expect(token).toEqual(mockToken)
      )
    mockService.expectOne({
      method: 'POST',
      url: 'http://localhost:5000/api/auth/login'
    }).flush(mockToken)
  }));
  it('should register', fakeAsync(() => {
    const mockToken = 'fakeJWT'
    service.registerUser({email: 'testEmail', password: 'testPassword'})
      .subscribe(
        token => expect(token).toEqual(mockToken)
      )
    mockService.expectOne({
      method: 'POST',
      url: 'http://localhost:5000/api/auth/register'
    }).flush(mockToken);
  }));
});
