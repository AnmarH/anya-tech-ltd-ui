import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Worker} from "../../models/worker.model";
import {Workers} from "../../models/workers.model";

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

    let url = "http://ec2-3-249-189-46.eu-west-1.compute.amazonaws.com:8080/workers/" + id;
    return this.httpClient.get<Worker>(url,httpOptions)

  }

  public getWorkers(): Observable<Workers> {

    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    let url = "http://ec2-3-249-189-46.eu-west-1.compute.amazonaws.com:8080/workers";
    return this.httpClient.get<Workers>(url,httpOptions)

  }



}
