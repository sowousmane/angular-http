import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class freeAPiService {

  constructor(private httpclient: HttpClient) {}

  getCountries(): Observable<any> {
    return this.httpclient.get("https://restcountries.eu/rest/v2/all");
  }
}
