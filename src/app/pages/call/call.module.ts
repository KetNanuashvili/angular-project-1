import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CallRoutingModule } from './call-routing.module';
import { CallsComponent } from './components/calls/calls.component';


@NgModule({
  declarations: [
    CallsComponent
  ],
  imports: [
    CommonModule,
    CallRoutingModule
  ]
})
export class CallModule { }
