import { Component, OnInit } from '@angular/core';
import {SharedService} from "../../../shared.service";

@Component({
  selector: 'app-item12',
  templateUrl: './item12.component.html',
  styleUrls: ['./item12.component.css']
})
export class Item12Component implements OnInit {

  constructor(private shared: SharedService) {
  }

  ngOnInit(): void {
  }

  onclick(): void {
    this.shared.setname('Elastic Sports Leg Knee Support');
    this.shared.setprice(810.00);
    this.shared.setitemcode('0012');
  }
}
