import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  registration: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit() {
    this.registration = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', Validators.required],
      otp: ['', [Validators.required, Validators.minLength(6)]],
      termsAndConditions: [false, Validators.requiredTrue]
    });
  }

  // convenience getter for easy access to form fields
  get isValid() {
    return this.registration.controls;
  }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registration.invalid) {
      return;
    }
    localStorage.setItem('FirstTimeRegistrationUser', JSON.stringify(this.registration.value));
    this.router.navigateByUrl('/login');
  }
}
