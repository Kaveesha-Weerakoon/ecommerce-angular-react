import { Component, OnInit } from '@angular/core';
import {SharedService} from "../../../shared.service";

@Component({
  selector: 'app-item20',
  templateUrl: './item20.component.html',
  styleUrls: ['./item20.component.css']
})
export class Item20Component implements OnInit {

  constructor(private shared: SharedService) {
  }

  ngOnInit(): void {
  }

  onclick(): void {
    this.shared.setname('Plant Growing Net Cup');
    this.shared.setprice(2000.00);
    this.shared.setitemcode('0020');
  }
}
