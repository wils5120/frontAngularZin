import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RequestRoutingModule } from './request-routing.module';
//import { RequestComponent } from './request.component';
//import { FormComponent } from './form/form.component';
//import { BankComponent } from '../bank/bank.component';

@NgModule({
  declarations: [ /* RequestComponent *//*  FormComponent, */ /* BankComponent */ ],
  imports: [
    CommonModule,
    RequestRoutingModule,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class RequestModule { }
