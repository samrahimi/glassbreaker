import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

/**
 * Api is a generic REST Api handler. Set your API url first with Api.setBaseUrl(url).
 */
@Injectable()
export class Api {
  defaultUrl: string = 'https://example.com/api/v1';

  constructor(public http: HttpClient) {
    console.log("Warning! Using stub API provider")
  }

  setBaseUrl(url) {
    this.defaultUrl = url; //Warning: does not validate that the url is reachable or properly formed.
  }

  get(endpoint: string, params?: any, reqOpts?: any) {
    if (!reqOpts) {
      reqOpts = {
        params: new HttpParams()
      };
    }

    // Support easy query params for GET requests
    if (params) {
      reqOpts.params = new HttpParams();
      for (let k in params) {
        reqOpts.params.set(k, params[k]);
      }
    }

    return this.http.get(this.defaultUrl + '/' + endpoint, reqOpts);
  }

  post(endpoint: string, body: any, reqOpts?: any) {
    return this.http.post(this.defaultUrl + '/' + endpoint, body, reqOpts);
  }

  put(endpoint: string, body: any, reqOpts?: any) {
    return this.http.put(this.defaultUrl + '/' + endpoint, body, reqOpts);
  }

  delete(endpoint: string, reqOpts?: any) {
    return this.http.delete(this.defaultUrl + '/' + endpoint, reqOpts);
  }

  patch(endpoint: string, body: any, reqOpts?: any) {
    return this.http.put(this.defaultUrl + '/' + endpoint, body, reqOpts);
  }
}
