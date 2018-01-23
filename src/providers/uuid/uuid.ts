import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { Uuid } from 'uuid/v4';
let _uuid = require('uuid/v4');
/*
  A simple UUID generation service. Uses UUID v4 NPM library.
*/
@Injectable()
export class UuidProvider {

  constructor(public http: HttpClient) {
    console.log('UUID Provider in da house');
  }

  UUID() {
    return _uuid();
  }
}
