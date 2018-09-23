import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuidanceComponent } from './guidance.component';

const routes: Routes = [
  {
    path: '',
    component: GuidanceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuidanceRoutingModule { }
