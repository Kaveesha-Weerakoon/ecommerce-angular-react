import { Component, OnInit } from '@angular/core';
import {SharedService} from "../../../shared.service";

@Component({
  selector: 'app-item8',
  templateUrl: './item8.component.html',
  styleUrls: ['./item8.component.scss']
})
export class Item8Component implements OnInit {

  constructor(private shared:SharedService) { }

  ngOnInit(): void {}
  onclick():void{
    this.shared.setname('USB Air Cool Humidifier');
    this.shared.setprice(1990.00);
    this.shared.setitemcode('0008');
  }

}
