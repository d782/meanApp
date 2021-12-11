import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graphics1Component } from './graphics1/graphics1.component';
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';
import { PromisesComponent } from './promises/promises.component';
import { RxjsComponent } from './rxjs/rxjs.component';

export const routes: Routes = [
    {path:'dashboard',component:PagesComponent,
  children:[
    {path:'',component:DashboardComponent, data:{titulo:'dashboard'}},
    {path:'progress',component:ProgressComponent, data:{titulo:'progress'}},
    {path:'graphic1',component:Graphics1Component, data:{titulo:'graphic'}},
    {path:'account-settings',component:AccountSettingsComponent, data:{titulo:'theme'}},    
    {path:'promises',component:PromisesComponent, data:{titulo:'promises'}},
    {path:'rxjs',component:RxjsComponent, data:{titulo:'rxjs'}},
  ]
  },
]


@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class PagesRoutingModule{}

