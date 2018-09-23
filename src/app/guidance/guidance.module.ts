import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuidanceRoutingModule } from './guidance-routing.module';
import { GuidanceComponent } from './guidance.component';

@NgModule({
  imports: [
    CommonModule,
    GuidanceRoutingModule
  ],
  declarations: [GuidanceComponent]
})
export class GuidanceModule { }
