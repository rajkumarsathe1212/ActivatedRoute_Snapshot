import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { EdituserComponent } from './edituser/edituser.component';

const routes: Routes = [
  {path:"",component:UsersComponent,pathMatch:'full'},
  {path:"user",component:EdituserComponent},
  {path:"user/:id",component:EdituserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
