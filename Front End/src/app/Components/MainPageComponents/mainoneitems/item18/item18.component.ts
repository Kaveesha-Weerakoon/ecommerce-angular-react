import { Component, OnInit } from '@angular/core';
import {SharedService} from "../../../shared.service";

@Component({
  selector: 'app-item18',
  templateUrl: './item18.component.html',
  styleUrls: ['./item18.component.css']
})
export class Item18Component implements OnInit {

  constructor(private shared: SharedService) {
  }

  ngOnInit(): void {
  }

  onclick(): void {
    this.shared.setname('Casual School Shoulder Bagpack');
    this.shared.setprice(3200.00);
    this.shared.setitemcode('0018');
  }
}
