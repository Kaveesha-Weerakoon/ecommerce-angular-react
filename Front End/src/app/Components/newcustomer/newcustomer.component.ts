import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-newcustomer',
  templateUrl: './newcustomer.component.html',
  styleUrls: ['./newcustomer.component.css']
})
export class NewcustomerComponent implements OnInit {

  alert:boolean=false;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {}

  form=new FormGroup({
    customername:new FormControl(null,Validators.required),
    Email:new FormControl(null,Validators.required),
    customeraddress:new FormControl(null,Validators.required),
    contactnumber:new FormControl(null,Validators.required),
    password:new FormControl(null,Validators.required)
  });
  submitForm(){
    this.http.post("http://127.0.0.1:3000/api/v1/customer/save",{
      customername:this.form.get('customername')?.value.toString(),
      Email:this.form.get('Email')?.value.toString(),
      customeraddress:this.form.get('customeraddress')?.value.toString(),
      contactnumber:this.form.get('contactnumber')?.value.toString(),
      password:this.form.get('password')?.value.toString()
    }).subscribe(result=>{
      console.log(result);
    })
    this.alert=true;
  }

  closealert(){
    this.alert=false;
  }
}
