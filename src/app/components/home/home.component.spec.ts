import {ComponentFixture, inject, TestBed} from '@angular/core/testing';

import {HomeComponent} from './home.component';
import {RouterTestingModule} from "@angular/router/testing";
import {Location} from "@angular/common";
import {Router} from "@angular/router";

describe('HomeComponent', () => {
  let component: HomeComponent;
  let location: Location;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports: [RouterTestingModule]
    })
    .compileComponents();
    location = TestBed.get(Location);
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should redirect to "/create-form"', inject([Router],(router: Router) => {
    const spy = spyOn(router, 'navigateByUrl')
    component.toFormBuilder();
    const url = spy.calls.first().args[0]
    expect(url).toBe('/create-form')
  }));
  it('should render text "Want create form easily? Try out this form builder", "Explore"', () => {
    // without space, but it's the text, that we want
    const pageContent: HTMLElement = fixture.nativeElement;
    const h1 = pageContent.querySelector("h1")!;
    const button = pageContent.querySelector("button")!;
    expect(h1.textContent).toEqual('Want create form easily? Try out this form builder');
    expect(button.textContent).toEqual('Explore')
  });
});
