import { Component, OnInit } from '@angular/core';
import {SharedService} from "../../../shared.service";

@Component({
  selector: 'app-item3',
  templateUrl: './item3.component.html',
  styleUrls: ['./item3.component.scss']
})
export class Item3Component implements OnInit {

  constructor(private shared:SharedService) { }

  ngOnInit(): void {}
  onclick():void{
    this.shared.setname('Iphone 12 Pro Max Case ');
    this.shared.setprice(760.00);
    this.shared.setitemcode('0003');
  }

}
