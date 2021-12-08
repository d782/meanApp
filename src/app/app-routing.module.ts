import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { Graphics1Component } from './pages/graphics1/graphics1.component';
import { NotpagefoundComponent } from './pages/notpagefound/notpagefound.component';
import { PagesComponent } from './pages/pages.component';
import { ProgressComponent } from './pages/progress/progress.component';

const routes: Routes = [
  {path:'',component:PagesComponent,
  children:[
    {path:'dashboard',component:DashboardComponent},
    {path:'progress',component:ProgressComponent},
    {path:'graphic1',component:Graphics1Component},
    {path:'',pathMatch:'full',redirectTo:'dashboard'},    
  ]
  },
  
  {path:'login', component:LoginComponent},
  {path:'register',component:RegisterComponent},
  
  {path:'**',pathMatch:'full',redirectTo:'dashboard'},
  
  {path:'**', component:NotpagefoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
