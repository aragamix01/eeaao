import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgramContainerRoutingModule } from './program-container-routing.module';
import { ProgramContainerComponent } from './program-container.component';


@NgModule({
  declarations: [
    ProgramContainerComponent
  ],
  imports: [
    CommonModule,
    ProgramContainerRoutingModule
  ]
})
export class ProgramContainerModule { }
