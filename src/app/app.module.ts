import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { FormAccordionComponent } from './form-accordion/form-accordion.component';
import { FormDraggableFieldsComponent } from './form-draggable-fields/form-draggable-fields.component';

@NgModule({
  declarations: [
    AppComponent,
    FormBuilderComponent,
    FormAccordionComponent,
    FormDraggableFieldsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
