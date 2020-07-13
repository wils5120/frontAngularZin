import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowUsersComponent } from './show-users/show-users.component';
//import { RequestComponent } from './request/request.component';
import { MenuComponent } from './menu/menu.component';
import { BankComponent } from './bank/bank.component';
import { RequestComponent } from './request/request.component';
import { FormComponent } from './request/form/form.component';

import { HttpClientModule } from '@angular/common/http';


import { Globals } from './globalBank';

@NgModule({
  declarations: [
    AppComponent,
    ShowUsersComponent,
    RequestComponent,
    MenuComponent,
    BankComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,

  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,

  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [Globals],
  bootstrap: [AppComponent]
})
export class AppModule { }
