import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './routes/home/home.component';
import { LoginComponent } from './routes/login/login.component';
import { Page404Component } from './routes/page404/page404.component';
import { RegisterComponent } from './routes/register/register.component';

const routes: Routes = [
  {path:'', pathMatch: "full", redirectTo: "/home"},
  {path:"home", component:HomeComponent },
  {path:"login", component:LoginComponent},
  {path:"registro", component:RegisterComponent },
  {path:"**", component:Page404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
