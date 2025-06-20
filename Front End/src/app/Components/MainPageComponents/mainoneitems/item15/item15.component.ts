import { Component, OnInit } from '@angular/core';
import {SharedService} from "../../../shared.service";

@Component({
  selector: 'app-item15',
  templateUrl: './item15.component.html',
  styleUrls: ['./item15.component.css']
})
export class Item15Component implements OnInit {

  constructor(private shared: SharedService) {
  }

  ngOnInit(): void {
  }

  onclick(): void {
    this.shared.setname('Mens Hawaiian Casual T-Shirt');
    this.shared.setprice(2760.00);
    this.shared.setitemcode('0015');
  }
}
