import {TestBed} from '@angular/core/testing';

import {TokenInterceptor} from './token.interceptor';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthService} from "../service/auth.service";
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";

describe('TokenInterceptor', () => {
  let interceptor: TokenInterceptor;
  let mockHttp: HttpTestingController;
  let service: AuthService;
  beforeEach(() => {
    TestBed.configureTestingModule({
    providers: [
      {
      provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true,
      },
      TokenInterceptor, AuthService
      ],
    imports: [HttpClientModule, HttpClientTestingModule]
    })
    service = TestBed.inject(AuthService);
    mockHttp = TestBed.inject(HttpTestingController);
    interceptor = TestBed.inject(TokenInterceptor);
  });
  it('should be created', () => {
    expect(interceptor).toBeTruthy();
  });
  it('should add access token to headers', () => {
    service.setToken('some_token')
    service.loginUser({email: 'testEmail', password: 'testPassword'})
      .subscribe((access_token) => expect(access_token).toBeTruthy())
    const httpRequest = mockHttp.expectOne({});
    expect(httpRequest.request.headers.has("access_token")).toEqual(true);
    expect(httpRequest.request.headers.get("access_token")).toBe('some_token')
  });
});
