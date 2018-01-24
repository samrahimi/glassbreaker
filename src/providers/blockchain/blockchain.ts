import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Md5 } from 'ts-md5/dist/md5';
/*
  Generated class for the BlockchainProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BlockchainProvider {

  constructor(public http: HttpClient) {
    console.log('Hello BlockchainProvider - time to rock and roll.');
  }

  getHashForObject(obj: object) : string {
    //This is dangerous... we will have mismatches based on encodings used by client and server
    //and the DB may inject its own fields later
    //We really need to annotate the fields that are to be used in the hash and ignore the rest. TODO.
    
    console.log("Hashing document...")
    var start = Date.now();
    var stringifiedObj = JSON.stringify(obj, null, 0);
    var hashed= <string>Md5.hashStr(stringifiedObj, false);
    var end = Date.now();
    var duration = end - start;
    console.log(stringifiedObj.length+" bytes hashed in "+duration+" ticks. Using TS-MD5");
    return hashed;
  }
}
