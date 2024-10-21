import { Component, OnInit } from '@angular/core';
import {ApiGatewayService} from "../services/api-gateway-service/api-gateway.service";

@Component({
  selector: 'app-contractors',
  templateUrl: './contractors.component.html',
  styleUrls: ['./contractors.component.css']
})
export class ContractorsComponent implements OnInit {

  public data: String;

  constructor(private apiGatewayService: ApiGatewayService) { }

  ngOnInit(): void {


    let data = this.apiGatewayService.makeRestCall().subscribe(data => console.log(data));




  }

}
