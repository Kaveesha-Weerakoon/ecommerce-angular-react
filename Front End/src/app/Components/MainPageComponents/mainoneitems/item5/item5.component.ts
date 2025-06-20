import { Component, OnInit } from '@angular/core';
import {SharedService} from "../../../shared.service";

@Component({
  selector: 'app-item5',
  templateUrl: './item5.component.html',
  styleUrls: ['./item5.component.scss']
})
export class Item5Component implements OnInit {

  constructor(private shared:SharedService) { }

  ngOnInit(): void {}
  onclick():void{
    this.shared.setname('Light Weight Running Shoes');
    this.shared.setprice(2340.00);
    this.shared.setitemcode('0005');
  }
}
