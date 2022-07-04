import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuilderComponent } from './components/builder/builder.component'
import {LoginComponent} from "./components/auth/login/login.component";

const routes: Routes = [
  { path: 'create-form', component: BuilderComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
