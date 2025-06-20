import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  itemnameSource=new BehaviorSubject("Item One")
  currentMessage=this.itemnameSource.asObservable();
  itemcodeSource=new BehaviorSubject("Sample Item code")
  currentMessage1=this.itemcodeSource.asObservable();
  unitpriceSource=new BehaviorSubject(0)
  currentMessage2=this.unitpriceSource.asObservable();
  constructor() { }

  public setname(itemname :string){
    this.itemnameSource.next(itemname);
  }
  public setitemcode(itemcode :string){
    this.itemcodeSource.next(itemcode);
  }
  public setprice(unitprice :number){
    this.unitpriceSource.next(unitprice);
  }

}

