import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Worker} from "../../models/worker.model";

@Injectable({
  providedIn: 'root'
})
export class ApiGatewayService {

  constructor(private httpClient: HttpClient) {

  }

  public getWorkerById(id:number):Observable<Worker>{

    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    let url = "http://localhost:8081/workers/" + id;
    return this.httpClient.get<Worker>(url,httpOptions)

  }



}
