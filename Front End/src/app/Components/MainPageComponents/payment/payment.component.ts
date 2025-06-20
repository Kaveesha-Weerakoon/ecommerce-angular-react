import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {SharedService} from "../../shared.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  alert:boolean=false;
  itemname :string="";
  itemcode:string="";
  price:number=0;
  unitprice:number=0;
  constructor(private shared:SharedService,private http:HttpClient,private router:Router) { }

  setprice(value:string){
    this.price=parseInt(value)*this.unitprice;
  }
  ngOnInit(): void {

    this.shared.currentMessage.subscribe(
      (itemname)=>(this.itemname=itemname)
    )
    this.shared.currentMessage1.subscribe(
      (itemcode)=>(this.itemcode=itemcode)
    )
    this.shared.currentMessage2.subscribe(
      (unitprice)=>(this.unitprice=unitprice)
    )
  }

  form=new FormGroup({
    Qty:new FormControl(null,Validators.required),
    customername:new FormControl(null,Validators.required),
    customeraddress:new FormControl(null,Validators.required)

  });
submitForm(){
 this.http.post("http://127.0.0.1:3000/api/v1/order/save",{
     itemcode:this.itemcode,
     Qty:this.form.get('Qty')?.value.toString(),
     total:this.price,
     customername:this.form.get('customername')?.value.toString(),
     customeraddress:this.form.get('customeraddress')?.value.toString(),
  }).subscribe(result=>{
      console.log(result);
  })
  this.alert=true;
}
closealert(){
  this.alert=false;
}
}
