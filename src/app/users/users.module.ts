import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ChartsModule } from 'ng2-charts';

import { UserService } from '../core/services/users.service';
import { UserRoutingModule } from './users-routing.module';
import { UserComponent } from './components/user/user.component';
import { ErrorComponent } from './components/error/error.component';

@NgModule({
  declarations: [
    UserComponent,
    ErrorComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,
  ],
  providers: [
    UserService,
  ]
})
export class UserModule { }
