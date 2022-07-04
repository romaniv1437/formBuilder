import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {StoreModule} from '@ngrx/store';
import {dragReducer} from '../store/reducers/drag.reducer';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormBuilderComponent} from './form-builder/form-builder.component';
import {FormAccordionComponent} from './form-accordion/form-accordion.component';
import {FormDraggableFieldsComponent} from './form-draggable-fields/form-draggable-fields.component';
import {DragDropModule} from "@angular/cdk/drag-drop";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {ReactiveComponentModule} from '@ngrx/component';
import {InputFieldComponent} from './form-draggable-fields/fields/input-field/input-field.component';
import {TextareaFieldComponent} from './form-draggable-fields/fields/textarea-field/textarea-field.component';
import {ButtonFieldComponent} from './form-draggable-fields/fields/button-field/button-field.component';
import {CheckboxFieldComponent} from './form-draggable-fields/fields/checkbox-field/checkbox-field.component';
import {SelectFieldComponent} from './form-draggable-fields/fields/select-field/select-field.component';
import {ColorPickerModule} from 'ngx-color-picker';
import { FormCreatorComponent } from './form-creator/form-creator.component';
import {NgxdModule} from "@ngxd/core";
import { FormDynamicComponent } from './form-creator/form-dynamic/form-dynamic.component';

@NgModule({
  declarations: [
    AppComponent,
    FormBuilderComponent,
    FormAccordionComponent,
    FormDraggableFieldsComponent,
    InputFieldComponent,
    TextareaFieldComponent,
    ButtonFieldComponent,
    CheckboxFieldComponent,
    SelectFieldComponent,
    FormCreatorComponent,
    FormDynamicComponent
  ],
    imports: [
        ReactiveComponentModule,
        BrowserModule,
        AppRoutingModule,
        DragDropModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        MatCardModule,
        StoreModule.forRoot({'formBuilder': dragReducer}),
        StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
        ColorPickerModule,
        NgxdModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
