import { Component, OnInit } from '@angular/core';
import {SharedService} from "../../../shared.service";

@Component({
  selector: 'app-item7',
  templateUrl: './item7.component.html',
  styleUrls: ['./item7.component.scss']
})
export class Item7Component implements OnInit {

  constructor(private shared:SharedService) { }

  ngOnInit(): void {}
  onclick():void{
    this.shared.setname('Portable Outdoor Camping Lamp');
    this.shared.setprice(3500.00);
    this.shared.setitemcode('0007');
  }

}
