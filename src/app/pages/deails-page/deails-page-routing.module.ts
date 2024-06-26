import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeailsPageModule } from './deails-page.module';
import { MainComponent } from './component/main/main.component';

const routes: Routes = [
  {
    path: ':id',
    component: MainComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeailsPageRoutingModule { }
