import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthRoutingModule } from './auth/auth.routing';
import { NotpagefoundComponent } from './pages/notpagefound/notpagefound.component';


import { PagesRoutingModule } from './pages/pages.routing';


const routes: Routes = [

  {path:'',pathMatch:'full',redirectTo:'dashboard'},
  {path:'**',pathMatch:'full',redirectTo:'dashboard'},
  {path:'**', component:NotpagefoundComponent}

];

@NgModule({
  imports: [
  RouterModule.forRoot(routes),
  PagesRoutingModule,
  AuthRoutingModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
