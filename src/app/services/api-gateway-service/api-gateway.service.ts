import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiGatewayService {

  constructor(private httpClient: HttpClient) {

  }

  public makeRestCall(){


    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    let url = "http://localhost:8081/workers/1"
    return this.httpClient.get(url,httpOptions)

  }



}
