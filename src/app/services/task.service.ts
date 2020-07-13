import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../interfaces/task';
import { Bank } from '../interfaces/bank';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private url = '/user';
  private urlBank = '/bank';

  constructor(private http: HttpClient) {

   }

   getAllUsers(){
    const path = `${this.url}/listUsr`;
    return this.http.get<Task[]>(path);
   }

   getBnak(){
    const path = `${this.urlBank}/save`;
    return this.http.get<Bank[]>(path);
   }

   getUser(id: Number){
    const path = `${this.url}/users/cc/${id}` ;
    return this.http.get<Task[]>(path);
   }

   getUserNoAproved(status: Boolean){
    const path = `${this.url}/users/estado/${status}` ;
    console.log(path);
    return this.http.get<Task[]>(path);
   }

   createUser(newUser: Task){
     const path = `${this.url}/addUsr`;
     return this.http.post(path, newUser);
   }

   update(UserUpdate: Task){
    const path = `${this.url}/actUs/cedula/${UserUpdate.cedula}`;
    return this.http.put<Task>(path, UserUpdate);
  }

  updateBalance(BankUpdate: Bank){
    const path = `${this.urlBank}/bak/bankName/${BankUpdate.bankName}`;
    return this.http.put<Bank>(path, BankUpdate);
  }
}
