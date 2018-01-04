import {Injectable} from "@angular/core";
import {LoginResponse} from "../model/LoginResponse";
import {User} from "../model/user.model";
import {Subject} from "rxjs/Subject";


export const TOKEN_STORAGE_KEY = "briky_token_id";
const USER_STORAGE_KEY = "briky_user";

@Injectable()
export class AuthStorage {

  user: Subject<User>;

  constructor() {
    this.user = new Subject<User>();
  }

  isLogged() {
    return localStorage.getItem(TOKEN_STORAGE_KEY) !== null;
  }


  update(response: LoginResponse) {
    localStorage.setItem(TOKEN_STORAGE_KEY, response.token);
    localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(response.user));

    this.user.next(response.user);
  }

  getUser(): User {
    return JSON.parse(localStorage.getItem(USER_STORAGE_KEY))
  }


}
