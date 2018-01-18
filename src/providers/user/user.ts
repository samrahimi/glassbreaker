import 'rxjs/add/operator/toPromise';

import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

// import { Api } from '../api/api';

/**  setLoggedIn(arg0: any): any {
    throw new Error("Method not implemented.");
  }

 * A simple login / signup service that talks to a Firestore database in the cloud.
 */
@Injectable()
export class User {
  _user: any;

  constructor() { }

  getCurrent() {
    return this._user;
  }
  isLoggedIn() {
   return this._user && this._user != null 
  } 
  login(accountInfo: any) {
    this._user = accountInfo
  }

  signup(accountInfo: any) {
    console.log("Deprecated!")
  }

  logout() {
    this._user = null;
  }

  /**
   * Deprecated method, to delete on next refactor
   */
  _loggedIn(resp) {
    this._user = resp.user;
  }
}
