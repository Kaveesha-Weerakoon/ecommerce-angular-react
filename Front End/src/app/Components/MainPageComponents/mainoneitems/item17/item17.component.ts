import { Component, OnInit } from '@angular/core';
import {SharedService} from "../../../shared.service";

@Component({
  selector: 'app-item17',
  templateUrl: './item17.component.html',
  styleUrls: ['./item17.component.css']
})
export class Item17Component implements OnInit {

  constructor(private shared: SharedService) {
  }

  ngOnInit(): void {
  }

  onclick(): void {
    this.shared.setname('Disney Pixar Kids Toy Cars');
    this.shared.setprice(1390.00);
    this.shared.setitemcode('0017');
  }
}
