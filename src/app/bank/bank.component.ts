import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.scss']
})
export class BankComponent implements OnChanges, OnInit {

  bankSald: any;
  bankLoan: Number;
  @Input()
  banckRecives: Number;
  @Input()
  banckBuy: Number;

  constructor(private servicesUser: TaskService) {
  }


  ngOnInit() {
    this.servicesUser.getBnak().subscribe(usr => {
      this.bankSald = usr;
      this.bankLoan = this.bankSald.bank[0].Monto;
      console.log(this.bankLoan);
      console.log(this.banckRecives);
    })
  }


  ngOnChanges(changes: SimpleChanges) {
    changes.banckRecives;
    console.log(this.banckBuy);
    if (this.banckRecives != undefined) {
      this.bankLoan = this.bankLoan.valueOf() - this.banckRecives.valueOf();
      console.log(this.bankLoan);
      this.UpdateBank('1Ct');
    }
    if (this.banckBuy != undefined) {
      this.bankLoan = this.bankLoan.valueOf() + this.banckBuy.valueOf();
      console.log(this.bankLoan);
      this.UpdateBank('1Ct');
    }
  }

  UpdateBank(bank) {
    console.log(bank);
    const banks = {
      bankName: bank,
      Monto: this.bankLoan,
    }
    console.log(banks);
    this.servicesUser.updateBalance(banks).subscribe((val) => {
      console.log(val);
    })
  }

}
