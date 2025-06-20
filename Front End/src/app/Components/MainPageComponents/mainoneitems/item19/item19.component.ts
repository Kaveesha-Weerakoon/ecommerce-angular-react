import { Component, OnInit } from '@angular/core';
import {SharedService} from "../../../shared.service";

@Component({
  selector: 'app-item19',
  templateUrl: './item19.component.html',
  styleUrls: ['./item19.component.css']
})
export class Item19Component implements OnInit {

  constructor(private shared: SharedService) {
  }

  ngOnInit(): void {
  }

  onclick(): void {
    this.shared.setname('Metal Sighting Compass');
    this.shared.setprice(2660.00);
    this.shared.setitemcode('0019');
  }
}
