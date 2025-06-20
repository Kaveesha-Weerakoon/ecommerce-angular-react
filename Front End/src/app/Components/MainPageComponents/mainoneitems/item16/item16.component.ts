import { Component, OnInit } from '@angular/core';
import {SharedService} from "../../../shared.service";

@Component({
  selector: 'app-item16',
  templateUrl: './item16.component.html',
  styleUrls: ['./item16.component.css']
})
export class Item16Component implements OnInit {

  constructor(private shared: SharedService) {
  }

  ngOnInit(): void {
  }

  onclick(): void {
    this.shared.setname('Creative Canvas Pencil Case');
    this.shared.setprice(1240.00);
    this.shared.setitemcode('0016');
  }
}
