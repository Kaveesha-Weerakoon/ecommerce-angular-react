import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainoneComponent} from "../MainPageComponents/mainone/mainone.component";
import {MainComponent} from "../main/main.component";
import {MaintwoComponent} from "../MainPageComponents/maintwo/maintwo.component";


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MainPageRoutingModule{ }
