import { Component, OnInit } from '@angular/core';
import {SharedService} from "../../../shared.service";

@Component({
  selector: 'app-item11',
  templateUrl: './item11.component.html',
  styleUrls: ['./item11.component.css']
})
export class Item11Component implements OnInit {

  constructor(private shared: SharedService) {
  }

  ngOnInit(): void {
  }

  onclick(): void {
      this.shared.setname('Retro Rose Design Ladies Watch');
      this.shared.setprice(3370.00);
      this.shared.setitemcode('0011');
  }
}
