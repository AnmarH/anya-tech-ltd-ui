import { Component, OnInit } from '@angular/core';
import {ApiGatewayService} from "../services/api-gateway-service/api-gateway.service";
import {Worker} from "../models/worker.model";
import {Workers} from "../models/workers.model";

@Component({
  selector: 'app-contractors',
  templateUrl: './contractors.component.html',
  styleUrls: ['./contractors.component.css']
})
export class ContractorsComponent implements OnInit {

  public worker: Worker;
  public workers: Workers;

  constructor(private apiGatewayService: ApiGatewayService) { }

  ngOnInit(): void {
    this.apiGatewayService
      .getWorkerById(1)
      .subscribe((worker) => this.worker = worker);

    this.apiGatewayService.getWorkers()
      .subscribe((workers => this.workers = workers));
  }

}
