import { Component, OnInit } from '@angular/core';
import {SharedService} from "../../../shared.service";

@Component({
  selector: 'app-item2',
  templateUrl: './item2.component.html',
  styleUrls: ['./item2.component.scss']
})
export class Item2Component implements OnInit {


  constructor(private shared:SharedService) { }

  ngOnInit(): void {}

  onclick():void{
    this.shared.setname('Men Women Casual T shirt ');
    this.shared.setprice(2300.00);
    this.shared.setitemcode('0002');
  }
}
