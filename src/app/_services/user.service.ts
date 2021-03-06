import { Injectable } from '@angular/core';
import {Http} from '@angular/http'
import 'rxjs/Rx'
import { AppSettings } from '../app.settings';
import { User } from '../_models/index';
import {Observable} from "rxjs";

@Injectable()
export class UserService {


   private _apiUrl = AppSettings.API_ENDPOINT + 'api/user/';

  constructor(private http: Http) {
  }

  getUsers() {
    return this.http.get(this._apiUrl)
      .map((responseData) => {
        return responseData.json();
      })
      .map((users: Array<any>) => {
        let result: Array<User> = [];
        if (users) {
          users.forEach((x) => {
            result.push(new User(x));
          });
        }
        return result;
      })
      .catch((error: any) => Observable.of(error.json().error || 'Server error'));
  }

  getUser(userId) {
    return this.http.get(this._apiUrl + 'users/' +userId, {withCredentials: true})
      .map((responseData) => {
        return responseData.json();
      })
      .map((user: any) => {
        return new User(user);
      })
      .catch((error: any) => Observable.of(error.json().error || 'Server error'));
  }
}



