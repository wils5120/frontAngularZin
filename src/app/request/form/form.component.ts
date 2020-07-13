import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  ngOnInit() {
  }

  emailPattern: any = /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/;
  status: boolean;
  buy: boolean;
  userValid: any;
  @Output()
  submitLoan: EventEmitter<Number> = new EventEmitter<Number>();
  loanSoon: Number;

  createFormGroup() {
    return new FormGroup({
      estado: new FormControl(''),
      pago: new FormControl(''),
      cedula: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      monto: new FormControl('', [Validators.required, Validators.min(10000), Validators.max(100000)]),
      correo: new FormControl('', [Validators.required, Validators.pattern(this.emailPattern)]),
    })
  }

  contactForm: FormGroup;

  constructor(private servicesUser: TaskService) {
    this.contactForm = this.createFormGroup();
  }


  onRestForm() {
    this.contactForm.reset();
  }

  createUser() {
    if (this.contactForm.valid) {
      this.ValidatorsLoan();
    } else {
      alert('por favor dijigenciar el formulario correctamente')
    }
  }

  ValidatorsLoan() {
    let validNew = true;
    this.servicesUser.getUser(this.contactForm.value.cedula).subscribe(usr => {
      console.log(usr);
      validNew = false;
      this.userValid = usr;
      this.userValid.userts.map(valUs => {
        console.log(valUs.estado);
        console.log(valUs.pago);
        if (valUs.estado == true && valUs.pago == false) {
          alert('su solicitud a sido denegada por que no ha pagado un prestamo anterior')
        }
        if (valUs.estado == true && valUs.pago == true) {
          alert('su solicitud a sido aprobada')
          this.submitLoan.emit(this.contactForm.value.monto);
        }
        if (valUs.estado == false) {
          alert('su solicitud a sido negada.');
        }
        this.UpdateUser();
      })
    }, err => {
      console.log(err);
      if (validNew) {
        let numStatus = Math.floor(Math.random() * (2 - 0)) + 0;
        console.log(numStatus);
        this.buy = false;
        if (numStatus == 1) {
          this.status = true;
          alert('su solicitud a sido aprobada')
          this.submitLoan.emit(this.contactForm.value.monto);
        } else {
          this.status = false;
          alert('su solicitud a sido denegada')
        }
      }
      this.UpdateUser();
    })
  }


  UpdateUser() {
    let cedulaEnd = this.contactForm.value.cedula + Math.floor(Math.random() * (8 - 2)) + 2;
    const usr = {
      estado: this.status,
      pago: this.buy,
      cedula: cedulaEnd,
      name: this.contactForm.value.name,
      monto: this.contactForm.value.monto,
      correo: this.contactForm.value.correo,
      cc: this.contactForm.value.cedula
    }
    console.log(usr);
    this.servicesUser.createUser(usr).subscribe((user) => {
       console.log(user);
     })
    this.onRestForm();
  }

  get name() { return this.contactForm.get('name'); }
  get cedula() { return this.contactForm.get('cedula'); }
  get monto() { return this.contactForm.get('monto'); }
  get correo() { return this.contactForm.get('correo'); }

}
