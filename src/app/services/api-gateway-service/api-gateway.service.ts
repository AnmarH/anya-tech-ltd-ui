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

    let url = "https://ec2-34-253-113-172.eu-west-1.compute.amazonaws.com:8443/workers/" + id;
    return this.httpClient.get<Worker>(url,httpOptions)

  }

  public getWorkers(): Observable<Workers> {

    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    let url = "https://ec2-34-253-113-172.eu-west-1.compute.amazonaws.com:8443/workers";
    return this.httpClient.get<Workers>(url,httpOptions)

  }



}
