import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
   { path: 'request', loadChildren:() => import('src/app/request/request.module').then(m => m.RequestModule) },
   { path: 'usrList', loadChildren: () => import('src/app/show-users/show-users.module').then(m => m.ShowUsersModule) },
   { path: '', loadChildren: () => import('src/app/show-users/show-users.module').then(m => m.ShowUsersModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
