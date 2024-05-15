import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { DynamicallyComponent } from './components/dynamically/dynamically.component';

const routes: Routes = [
  {
    path: 'reactive',
    component: MainComponent
  },
  {
    path: 'dynamically',
    component: DynamicallyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsPageRoutingModule { }
