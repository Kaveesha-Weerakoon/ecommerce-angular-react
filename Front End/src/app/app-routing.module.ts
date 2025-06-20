import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./Components/main/main.component";
import {MainoneComponent} from "./Components/MainPageComponents/mainone/mainone.component";
import {MainPageComponent} from "./Components/main-page/main-page.component";
import {Item1Component} from "./Components/MainPageComponents/mainoneitems/item1/item1.component";
import {Item2Component} from "./Components/MainPageComponents/mainoneitems/item2/item2.component";
import {Item3Component} from "./Components/MainPageComponents/mainoneitems/item3/item3.component";
import {Item4Component} from "./Components/MainPageComponents/mainoneitems/item4/item4.component";
import {Item5Component} from "./Components/MainPageComponents/mainoneitems/item5/item5.component";
import {Item6Component} from "./Components/MainPageComponents/mainoneitems/item6/item6.component";
import {Item7Component} from "./Components/MainPageComponents/mainoneitems/item7/item7.component";
import {Item8Component} from "./Components/MainPageComponents/mainoneitems/item8/item8.component";
import {Item9Component} from "./Components/MainPageComponents/mainoneitems/item9/item9.component";
import {Item10Component} from "./Components/MainPageComponents/mainoneitems/item10/item10.component";
import {PaymentComponent} from "./Components/MainPageComponents/payment/payment.component";
import {PaymentsuccessComponent} from "./Components/MainPageComponents/paymentsuccess/paymentsuccess.component";
import {AboutusComponent} from "./Components/aboutus/aboutus.component";
import {NewcustomerComponent} from "./Components/newcustomer/newcustomer.component";
import {Item11Component} from "./Components/MainPageComponents/mainoneitems/item11/item11.component";
import {Item12Component} from "./Components/MainPageComponents/mainoneitems/item12/item12.component";
import {Item13Component} from "./Components/MainPageComponents/mainoneitems/item13/item13.component";
import {Item14Component} from "./Components/MainPageComponents/mainoneitems/item14/item14.component";
import {Item15Component} from "./Components/MainPageComponents/mainoneitems/item15/item15.component";
import {Item16Component} from "./Components/MainPageComponents/mainoneitems/item16/item16.component";
import {Item17Component} from "./Components/MainPageComponents/mainoneitems/item17/item17.component";
import {Item18Component} from "./Components/MainPageComponents/mainoneitems/item18/item18.component";
import {Item19Component} from "./Components/MainPageComponents/mainoneitems/item19/item19.component";
import {Item20Component} from "./Components/MainPageComponents/mainoneitems/item20/item20.component";
import {CategoriesComponent} from "./Components/MainPageComponents/categories/categories.component";
import {CategoryoneComponent} from "./Components/MainPageComponents/categories/category items/categoryone/categoryone.component";
import {CategoryfiveComponent} from "./Components/MainPageComponents/categories/category items/categoryfive/categoryfive.component";
import {CategorysixComponent} from "./Components/MainPageComponents/categories/category items/categorysix/categorysix.component";
import { CategoryfourComponent } from './Components/MainPageComponents/categories/category items/categoryfour/categoryfour.component';
import {CategorythreeComponent} from "./Components/MainPageComponents/categories/category items/categorythree/categorythree.component";
import { CategorytwoComponent } from './Components/MainPageComponents/categories/category items/categorytwo/categorytwo.component';

const routes: Routes = [{path:'', redirectTo:'main',pathMatch:'full'},{path:'main',component:MainComponent},
  {path:'newcustomer',component:NewcustomerComponent},
  {path:'mainpage',component:MainPageComponent,
    children:[
      {path:'mainone',component:MainoneComponent},{path:'',redirectTo:'mainone',pathMatch:'full'},
      {path:'item1',component:Item1Component},{path:'item2',component:Item2Component},{path:'item3',component:Item3Component},{path:'item4',component:Item4Component},{path:'item5',component:Item5Component},{path:'item6',component:Item6Component},{path:'item7',component:Item7Component},{path:'item8',component:Item8Component},{path:'item9',component:Item9Component},{path:'item10',component:Item10Component},
      {path:'item11',component:Item11Component},{path:'item12',component:Item12Component},{path:'item13',component:Item13Component},{path:'item14',component:Item14Component},{path:'item15',component:Item15Component},{path:'item16',component:Item16Component},{path:'item17',component:Item17Component},{path:'item18',component:Item18Component},{path:'item19',component:Item19Component},{path:'item20',component:Item20Component},
      {path:'payment' ,component:PaymentComponent},{path:'paymentsuccess' ,component:PaymentsuccessComponent},{path:'aboutus',component:AboutusComponent},{path:'category',component:CategoriesComponent},
      {path:'categoryone',component:CategoryoneComponent},{path:'categorytwo',component:CategorytwoComponent},{path:'categorythree',component:CategorythreeComponent},{path:'categoryfour',component:CategoryfourComponent},{path:'categoryfive',component:CategoryfiveComponent},{path:'categorysix',component:CategorysixComponent},]

  }];


@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration:'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
