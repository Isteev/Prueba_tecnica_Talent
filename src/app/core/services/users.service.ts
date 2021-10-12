import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/* import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators'; */

import { response } from '../models/responseModel';
import { User } from '../models/userModel';

@Injectable()
export class UserService {

  url = 'https://api.github.com/';
  constructor(private http: HttpClient) { }

  getUsers(query: String) {
    return this.http.get<response>(`${this.url}search/users?q=${query}`);
  }

  getUserByLogin(login: String) {
    return this.http.get<User>(`${this.url}users/${login}`);
  }
  
  getFollowers(url: String) {
    return this.http.get<User[]>(`${url}`);
  }
}