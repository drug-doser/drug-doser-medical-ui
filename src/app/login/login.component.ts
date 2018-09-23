import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login: FormGroup;
  submitted = false;
  message: string;

  constructor(private formBuilder: FormBuilder,
    private router: Router, public authService: AuthService) { }

  firstTimeRegistrationUser = {};
  ngOnInit() {
    this.firstTimeRegistrationUser = JSON.parse(localStorage.getItem('FirstTimeRegistrationUser'));
    this.login = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  // convenience getter for easy access to form fields
  get isValid() {
    return this.login.controls;
  }

  setMessage() {
    this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
  }

  onSignIn() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.login.invalid) {
      return;
    }
    this.authService.login(this.login.get('userName').value, this.login.get('password').value).subscribe(() => {
      this.setMessage();
      if (this.authService.isLoggedIn) {
        let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/admin';
        let navigationExtras: NavigationExtras = {
          queryParamsHandling: 'preserve',
          preserveFragment: true
        };
        this.router.navigate([redirect], navigationExtras);
      }
    });
  }
}
