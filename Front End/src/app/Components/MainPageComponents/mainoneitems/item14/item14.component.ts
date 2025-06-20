import { Component, OnInit } from '@angular/core';
import {SharedService} from "../../../shared.service";

@Component({
  selector: 'app-item14',
  templateUrl: './item14.component.html',
  styleUrls: ['./item14.component.css']
})
export class Item14Component implements OnInit {

  constructor(private shared: SharedService) {
  }

  ngOnInit(): void {
  }

  onclick(): void {
    this.shared.setname('JBL Wireless Bluetooth Earphone');
    this.shared.setprice(4530.00);
    this.shared.setitemcode('0014');
  }
}
