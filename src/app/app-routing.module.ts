import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanDeactivateGuard } from './login/can-deactivate-guard.service';
import { SelectivePreloadingStrategy } from './login/selective-preloading-strategy';
import { AuthGuard } from './login/auth-guard.service';
import { AuthService } from './login/auth.service';

const appRoutes: Routes = [
  {
    path: 'login',
    loadChildren: './login/login.module#LoginModule',
  },
  {
    path: 'registration',
    loadChildren: './registration/registration.module#RegistrationModule'
  },
  {
    path: 'admin',
    loadChildren: './admin/admin.module#AdminModule',
    canLoad: [AuthGuard]
  },
  {
    path: 'pharmacist',
    loadChildren: './pharmacist/pharmacist.module#PharmacistModule',
    canLoad: [AuthGuard]
  },
  {
    path: 'guidance',
    loadChildren: './guidance/guidance.module#GuidanceModule'
  },
  {
    path: 'support',
    loadChildren: './support/support.module#SupportModule'
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login', }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: true, // <-- debugging purposes only
        preloadingStrategy: SelectivePreloadingStrategy,

      }
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [
    CanDeactivateGuard,
    SelectivePreloadingStrategy,
    AuthGuard,
    AuthService
  ]
})
export class AppRoutingModule { }

/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/