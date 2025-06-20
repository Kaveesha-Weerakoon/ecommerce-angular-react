import { Component, OnInit } from '@angular/core';
import {SharedService} from "../../../shared.service";

@Component({
  selector: 'app-item10',
  templateUrl: './item10.component.html',
  styleUrls: ['./item10.component.scss']
})
export class Item10Component implements OnInit {

  constructor(private shared:SharedService) { }

  ngOnInit(): void {}
  onclick():void{
    this.shared.setname('Tennis Balls With Bag');
    this.shared.setprice(1500.00);
    this.shared.setitemcode('0010');
  }
}
