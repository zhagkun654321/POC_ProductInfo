import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { HttpHeaders,  HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Injectable({
  providedIn: 'root'
})
export class APIServiceService {

  constructor(private http: Http, 
              private subscription: Subscription,
              private httpOptions: HttpHeaders) {

  }

  searchAPI(){
       
      this.http.get<any>('https://api.npms.io/v2/search?q=scope:angular').subscribe(data => {
      console.log(data);
    })
  }


}
