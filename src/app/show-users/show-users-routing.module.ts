import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowUsersComponent } from './show-users.component';


const routes: Routes = [
  { path: '', component: ShowUsersComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowUsersRoutingModule { }
