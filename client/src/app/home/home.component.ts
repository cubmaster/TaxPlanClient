import { Component, OnInit } from '@angular/core';

import {ApiService} from "../services/api.service";
import {IBase} from "../models/Base";
import {Scenario} from "../models/Scenario"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  public scenarios:Scenario[] = [];

  constructor(private api: ApiService) { }



  ngOnInit(): void {
    this.getList();


  }

  getList(){
    this.api.list(new Scenario(),null).subscribe(x=>{
      this.scenarios = x;

    });
  }


  NewScenario(){

    var scenario = new Scenario('my new scenaro');
    this.api.create(scenario).subscribe(  (x:Scenario)=>{

    });
  }

}
