import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

import { UserService } from 'src/app/core/services/users.service';
import { response } from 'src/app/core/models/responseModel';
import { User } from 'src/app/core/models/userModel';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: User[] = [];

  Options: ChartOptions = {
    responsive: true,
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  
  Labels: Label[] = this.users.map((user: User) => user.login as Label);
  Type: ChartType = 'bar';
  Legend = true;
  Data: ChartDataSets[] = [{ data: [0], label: '' }]

  error: String | undefined;

  constructor( private router: Router, private userService: UserService ) { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {
    this.getUsers(f.value.Filter);
  }

  getUsers(filter: String) {
    this.error = undefined;
    this.users = [];
    this.validators(filter);

    if (filter && !this.error) {
      this.userService.getUsers(filter)
      .subscribe((data: response) => {
        this.users = data.items as User[];
        this.setDataBar();
      });
    }
  }

  validators(filter: String) {
    const control = new FormControl(filter, [Validators.minLength(4), Validators.required]);

    if (filter === 'doublevpartners') {
      this.error = 'No se puede buscar este usuario.'
    }
    
    if (control.errors?.required) {
      this.error = 'Debe ingresar un usuario.'
    }
    
    if (control.errors?.minlength) {
      this.error = 'Nombre de usuario mayor a 4 digitos.'
    }

  }

  setDataBar() {
    this.Data = [];

    this.users.slice(0, 10).forEach((user: User) => {
      this.userService.getFollowers(user.followers_url as String).subscribe( (data: User[]) => {
        this.Data.push({ data: [data.length], label: user.login as string })
      } )
    })
  }

  goToUserDetail(login: any) {
    this.router.navigate(['detail', login]);
  }

}
