import { Component, OnInit } from '@angular/core';
import {SharedService} from "../../../shared.service";

@Component({
  selector: 'app-item4',
  templateUrl: './item4.component.html',
  styleUrls: ['./item4.component.scss']
})
export class Item4Component implements OnInit {

  constructor(private shared:SharedService) { }

  ngOnInit(): void {}
  onclick():void{
    this.shared.setname('Luxury Fashion Quartz Watch');
    this.shared.setprice(1100.00);
    this.shared.setitemcode('0004');
  }
}
