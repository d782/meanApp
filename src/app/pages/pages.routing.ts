import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graphics1Component } from './graphics1/graphics1.component';
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';

export const routes: Routes = [
    {path:'dashboard',component:PagesComponent,
  children:[
    {path:'',component:DashboardComponent},
    {path:'progress',component:ProgressComponent},
    {path:'graphic1',component:Graphics1Component},
    {path:'account-settings',component:AccountSettingsComponent},    
  ]
  },
]


@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class PagesRoutingModule{}

