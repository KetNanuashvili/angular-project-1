import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: ()=> import('./pages/home-page/home-page.module').then(item=> item.HomePageModule)
  },
  {
    path: 'details',
    loadChildren: ()=> import('./pages/deails-page/deails-page.module').then(item=> item.DeailsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
