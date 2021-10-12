import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/core/services/users.service';
import { User } from 'src/app/core/models/userModel';

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.css']
})
export class DetailUserComponent implements OnInit {
  login: String = '';

  user!: User;

  constructor( private route: ActivatedRoute, private userService: UserService ) { }

  ngOnInit(): void {
    this.login = this.route.snapshot.params['login'];

    this.userService.getUserByLogin(this.login)
      .subscribe((data: User) => this.user = data);

    
  }

}
