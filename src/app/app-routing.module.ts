import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authorizationGuard } from './authoritation.guard'; // Import the guard

const routes: Routes = [
  {
    path: 'home',
    loadChildren: ()=> import('./pages/home-page/home-page.module').then(item=> item.HomePageModule),
    canActivate: [authorizationGuard] // Use the guard here
  },
  {
    path: 'details',
    loadChildren: ()=> import('./pages/deails-page/deails-page.module').then(item=> item.DeailsPageModule),
  },
  {
    path: 'forms',
    loadChildren: ()=> import('./pages/forms-page/forms-page.module').then(item=> item.FormsPageModule),
   
  },
  {
    path: 'calls',
    loadChildren: ()=> import('./pages/call/call.module').then(item=> item.CallModule),

   
  }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
