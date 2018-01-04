import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import {environment} from "../../environments/environment";
import {AuthStorage} from "../security/auth.storage";
import {LoginResponse} from "../model/LoginResponse";

@Injectable()
export class AuthService {

  constructor(
    private http: HttpClient,
    private auth: AuthStorage) { }

  login(email: string, password: string): Observable<LoginResponse> {
    return this.http
      .post<LoginResponse>(environment.endpoint + '/login', {email, password})
      .map(response => {
         this.auth.update(response);
         return response;
      })
  }


}
