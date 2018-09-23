import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { delay, tap }  from 'rxjs/operators';

@Injectable()
export class AuthService {
  isLoggedIn = false;
  userName = String;
  password = String;

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  login(userName, password): Observable<boolean> {
    //return of(true).delay(1000).tap(val => this.isLoggedIn = true);
    this.userName = userName;
    this.password = password
    this.isLoggedIn = true
    return of(true);
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}

/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/