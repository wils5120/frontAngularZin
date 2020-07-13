import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent implements OnInit {

  loanBank: Number;

  constructor() { }

  ngOnInit() {
  }

  recibeLoan(eve) {
    this.loanBank = eve;
    console.log(this.loanBank);
  }

}
