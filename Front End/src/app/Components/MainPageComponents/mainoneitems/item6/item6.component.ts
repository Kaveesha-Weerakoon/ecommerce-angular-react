import { Component, OnInit } from '@angular/core';
import {SharedService} from "../../../shared.service";

@Component({
  selector: 'app-item6',
  templateUrl: './item6.component.html',
  styleUrls: ['./item6.component.scss']
})
export class Item6Component implements OnInit {

  constructor(private shared:SharedService) { }

  ngOnInit(): void {}
  onclick():void{
    this.shared.setname('Walking Robot Kids Toy');
    this.shared.setprice(1340.00);
    this.shared.setitemcode('0006');
  }
}
