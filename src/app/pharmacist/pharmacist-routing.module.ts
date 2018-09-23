import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PharmacistComponent } from './pharmacist.component';
import { AuthGuard } from '../login/auth-guard.service'

const routes: Routes = [
  {
    path: '',
    component: PharmacistComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PharmacistRoutingModule { }
