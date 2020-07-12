import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-show-users',
  templateUrl: './show-users.component.html',
  styleUrls: ['./show-users.component.scss']
})
export class ShowUsersComponent implements OnInit {

  constructor(private servicesUser: TaskService) { }

  listUsr: any;
  list: any;
  listNoAproved: any;
  text: any;
  historyUser: any;
  pending: boolean = false;
  showAll: boolean = false;
  showNoApro: boolean = true;
  showApro: boolean = true;


  getUsers(value: Number) {
    this.servicesUser.getUser(value).subscribe(usr => {
      console.log(usr);
      this.historyUser = usr;
      this.list = this.historyUser.userts
      this.showNoApro = true;
      this.showApro = true;
      this.showAll = true;
    })
  }

  getUsersNotapproved(status: boolean) {
    this.servicesUser.getUserNoAproved(status).subscribe(usr => {
      this.listNoAproved = usr;
      this.list = this.listNoAproved.userts;
      this.showAll = true;
      if (status) {
        this.pending = true;
        this.showNoApro = true;
        this.showApro = false;
        this.text = "Aprobados";
      }
      else {
        this.showApro = true;
        this.pending = false;
        this.showNoApro = false;
        this.text = "No aprobados";
      }
    })
  }


  ngOnInit() {
    this.servicesUser.getAllUsers().subscribe(usr => {
      this.listUsr = usr;
      this.showNoApro = true;
      this.showApro = true;
      this.showAll = false;
      this.list = this.listUsr.users;
      this.text = " ";
      this.pending = false;
    })
  }



  UpdateUser(usrs) {
    console.log(usrs)
    const usr = {
      estado: true,
      pago: true,
      cedula: usrs.cedula,
      name: usrs.name,
      monto: usrs.monto,
      correo: usrs.correo,
      cc: usrs.cc
    }
    console.log(usr);
    this.servicesUser.update(usr).subscribe((user) => {
      console.log(user);
      this.getUsersNotapproved(true);
    })
  }

}
