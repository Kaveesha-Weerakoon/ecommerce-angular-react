import { Component, OnInit } from '@angular/core';
import {SharedService} from "../../../shared.service";

@Component({
  selector: 'app-item9',
  templateUrl: './item9.component.html',
  styleUrls: ['./item9.component.scss']
})
export class Item9Component implements OnInit {

  constructor(private shared:SharedService) { }

  ngOnInit(): void {}
  onclick():void{
    this.shared.setname('Boxing Reflex Punch Bag');
    this.shared.setprice(2770.00);
    this.shared.setitemcode('0009');
  }
}
