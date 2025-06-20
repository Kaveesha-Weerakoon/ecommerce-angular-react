import { Component, OnInit } from '@angular/core';
import {SharedService} from "../../../shared.service";

@Component({
  selector: 'app-item1',
  templateUrl: './item1.component.html',
  styleUrls: ['./item1.component.scss']
})
export class Item1Component implements OnInit {

  constructor(private shared:SharedService) { }

  ngOnInit(): void {}
  onclick():void{
     this.shared.setname('Luxury Women Handbag');
    this.shared.setprice(3790.50);
    this.shared.setitemcode('0001');
  }
}
