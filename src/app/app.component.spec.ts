import {ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AppComponent} from './app.component';
import {AuthService} from "./service/auth.service";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {Location} from "@angular/common";

describe('AppComponent', () => {
  let component: AppComponent
  let fixture: ComponentFixture<AppComponent>;
  let location: Location;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [AuthService]
    }).compileComponents();
    location = TestBed.get(Location);
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges()
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });
  it('should set token', () => {
    const spy = spyOn(component, "ngOnInit");
    component.ngOnInit()
    expect(spy).toHaveBeenCalled()
  });
  it('should redirect to "/" ', () => {
    component.toHome()
    expect(location.path()).toBe('')
  })
});
