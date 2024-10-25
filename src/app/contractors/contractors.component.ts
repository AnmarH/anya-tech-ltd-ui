import { Component, OnInit } from '@angular/core';
import {ApiGatewayService} from "../services/api-gateway-service/api-gateway.service";
import {map} from "rxjs";

@Component({
  selector: 'app-contractors',
  templateUrl: './contractors.component.html',
  styleUrls: ['./contractors.component.css']
})
export class ContractorsComponent implements OnInit {

  public variable: any;

  constructor(private apiGatewayService: ApiGatewayService) { }

  ngOnInit(): void {
    this.apiGatewayService.makeRestCall().pipe(map(value => value)).subscribe((data) =>
    {
      this.variable = data;
      console.log(data);
    });
  }

}
