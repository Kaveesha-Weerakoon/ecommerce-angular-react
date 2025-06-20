import { Component, OnInit } from '@angular/core';
import {SharedService} from "../../../shared.service";

@Component({
  selector: 'app-item13',
  templateUrl: './item13.component.html',
  styleUrls: ['./item13.component.css']
})
export class Item13Component implements OnInit {

  constructor(private shared: SharedService) {
  }

  ngOnInit(): void {
  }

  onclick(): void {
    this.shared.setname('Mens Fur Brown Jacket');
    this.shared.setprice(4600.00);
    this.shared.setitemcode('0013');
  }
}
