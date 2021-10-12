import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetailUserComponent } from './components/detail-user/detail-user.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  { 
    path: '',
    component: UserComponent 
  },
  { 
    path: 'detail/:login',
    component: DetailUserComponent 
  } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
