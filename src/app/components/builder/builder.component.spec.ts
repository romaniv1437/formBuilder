import {ComponentFixture, TestBed} from '@angular/core/testing';

import {BuilderComponent} from './builder.component';
import {ReactiveComponentModule} from '@ngrx/component';
import {StoreModule} from "@ngrx/store";
import {dragReducer} from "../../../store/reducers/drag.reducer";
import {findComponent} from "../assets/findComponent/findComponent";

describe('BuilderComponent', () => {
  let component: BuilderComponent;
  let fixture: ComponentFixture<BuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuilderComponent ],
      imports: [
        StoreModule.forRoot({'formBuilder': dragReducer}),
        ReactiveComponentModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should render form-builder component', () => {
    component.ngOnInit();
    fixture.detectChanges();
    const formBuilder = findComponent(fixture, 'app-form-builder');
    expect(formBuilder).not.toBeNull();
  });
});
