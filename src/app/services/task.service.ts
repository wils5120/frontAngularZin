import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../interfaces/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private url = '/user';

  constructor(private http: HttpClient) {

   }

   getAllUsers(){
    const path = `${this.url}/listUsr`;
    return this.http.get<Task[]>(path);
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
}
