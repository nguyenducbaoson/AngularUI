import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutocompleteComponent } from './component/autocomplete/autocomplete.component';
import { InputComponent } from './input/input.component';
import { HomeComponent } from './component/home/home.component';
import { CardComponent } from './component/card/card.component';
import { SliderComponent } from './component/slider/slider.component';
import { TableComponent } from './component/table/table.component';
import { DemoComponent } from './component/demo/demo.component';
import { Demo2Component } from './component/demo2/demo2.component';
import { FormdesignComponent } from './component/formdesign/formdesign.component';
import { PopupComponent } from './component/popup/popup.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'demo',component:DemoComponent},
  {path:'demo2',component:Demo2Component},
  {path:'autocomplete',component:AutocompleteComponent},
  {path:'input',component:InputComponent},
  {path:'card',component:CardComponent},
  {path:'slider',component:SliderComponent},
  {path:'table',component:TableComponent},
  {path:'form',component:FormdesignComponent},
  {path:'popup',component:PopupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 
