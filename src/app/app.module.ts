import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputComponent } from './input/input.component';
import { MaterialModule } from 'src/Material.Module';
import { AutocompleteComponent } from './component/autocomplete/autocomplete.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenubarComponent } from './component/menubar/menubar.component';
import { HomeComponent } from './component/home/home.component';
import { CardComponent } from './component/card/card.component';
import { SliderComponent } from './component/slider/slider.component';
import { TableComponent } from './component/table/table.component';
import { HttpClientModule } from '@angular/common/http';
import { DemoComponent } from './component/demo/demo.component';
import { FormdesignComponent } from './component/formdesign/formdesign.component';
import { PopupComponent } from './component/popup/popup.component';
import { Demo2Component } from './component/demo2/demo2.component';
@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    AutocompleteComponent,
    MenubarComponent,
    HomeComponent,
    CardComponent,
    SliderComponent,
    TableComponent,
    DemoComponent,
    FormdesignComponent,
    PopupComponent,
    Demo2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule  
  ],  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
