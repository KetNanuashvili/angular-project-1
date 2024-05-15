import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsPageRoutingModule } from './forms-page-routing.module';
import { MainComponent } from './components/main/main.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicallyComponent } from './components/dynamically/dynamically.component';


@NgModule({
  declarations: [
    MainComponent,
    DynamicallyComponent
  ],
  imports: [
    CommonModule,
    FormsPageRoutingModule,
    ReactiveFormsModule
  ]
})
export class FormsPageModule { }
