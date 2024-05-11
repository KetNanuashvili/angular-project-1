import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeailsPageRoutingModule } from './deails-page-routing.module';
import { MainComponent } from './component/main/main.component';


@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    DeailsPageRoutingModule
  ]
})
export class DeailsPageModule { }
