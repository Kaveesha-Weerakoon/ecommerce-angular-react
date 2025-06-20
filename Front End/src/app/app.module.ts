import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MainComponent} from "./Components/main/main.component";
import {MainoneComponent} from "./Components/MainPageComponents/mainone/mainone.component";
import {MainPageComponent} from "./Components/main-page/main-page.component";
import {Item10Component} from "./Components/MainPageComponents/mainoneitems/item10/item10.component";
import {Item1Component} from "./Components/MainPageComponents/mainoneitems/item1/item1.component";
import {Item2Component} from "./Components/MainPageComponents/mainoneitems/item2/item2.component";
import {Item3Component} from "./Components/MainPageComponents/mainoneitems/item3/item3.component";
import {Item4Component} from "./Components/MainPageComponents/mainoneitems/item4/item4.component";
import {Item5Component} from "./Components/MainPageComponents/mainoneitems/item5/item5.component";
import {Item6Component} from "./Components/MainPageComponents/mainoneitems/item6/item6.component";
import {Item7Component} from "./Components/MainPageComponents/mainoneitems/item7/item7.component";
import {Item8Component} from "./Components/MainPageComponents/mainoneitems/item8/item8.component";
import {Item9Component} from "./Components/MainPageComponents/mainoneitems/item9/item9.component";
import {PaymentComponent} from "./Components/MainPageComponents/payment/payment.component";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {ToastrModule} from "ngx-toastr";
import { PaymentsuccessComponent } from './Components/MainPageComponents/paymentsuccess/paymentsuccess.component';
import { AboutusComponent } from './Components/aboutus/aboutus.component';
import { NewcustomerComponent } from './Components/newcustomer/newcustomer.component';
import { Item11Component } from './Components/MainPageComponents/mainoneitems/item11/item11.component';
import { Item12Component } from './Components/MainPageComponents/mainoneitems/item12/item12.component';
import { Item13Component } from './Components/MainPageComponents/mainoneitems/item13/item13.component';
import { Item14Component } from './Components/MainPageComponents/mainoneitems/item14/item14.component';
import { Item15Component } from './Components/MainPageComponents/mainoneitems/item15/item15.component';
import { Item16Component } from './Components/MainPageComponents/mainoneitems/item16/item16.component';
import { Item17Component } from './Components/MainPageComponents/mainoneitems/item17/item17.component';
import { Item18Component } from './Components/MainPageComponents/mainoneitems/item18/item18.component';
import { Item19Component } from './Components/MainPageComponents/mainoneitems/item19/item19.component';
import { Item20Component } from './Components/MainPageComponents/mainoneitems/item20/item20.component';
import { CategoriesComponent } from './Components/MainPageComponents/categories/categories.component';
import { CategoryoneComponent } from './Components/MainPageComponents/categories/category items/categoryone/categoryone.component';
import { CategorytwoComponent } from './Components/MainPageComponents/categories/category items/categorytwo/categorytwo.component';
import { CategorythreeComponent } from './Components/MainPageComponents/categories/category items/categorythree/categorythree.component';
import { CategoryfourComponent } from './Components/MainPageComponents/categories/category items/categoryfour/categoryfour.component';
import { CategoryfiveComponent } from './Components/MainPageComponents/categories/category items/categoryfive/categoryfive.component';
import { CategorysixComponent } from './Components/MainPageComponents/categories/category items/categorysix/categorysix.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MainoneComponent,
    MainPageComponent,
    Item1Component,
    Item2Component,
    Item3Component,
    Item4Component,
    Item5Component,
    Item6Component,
    Item7Component,
    Item8Component,
    Item9Component,
    Item10Component,
    PaymentComponent,
    PaymentsuccessComponent,
    AboutusComponent,
    NewcustomerComponent,
    Item11Component,
    Item12Component,
    Item13Component,
    Item14Component,
    Item15Component,
    Item16Component,
    Item17Component,
    Item18Component,
    Item19Component,
    Item20Component,
    CategoriesComponent,
    CategoryoneComponent,
    CategorytwoComponent,
    CategorythreeComponent,
    CategoryfourComponent,
    CategoryfiveComponent,
    CategorysixComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
