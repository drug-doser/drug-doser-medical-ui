import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RegistrationRoutingModule } from './registration-routing.module';
import { RegistrationComponent } from './registration.component';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RegistrationRoutingModule
  ],
  declarations: [RegistrationComponent, TermsConditionsComponent]
})
export class RegistrationModule { }
