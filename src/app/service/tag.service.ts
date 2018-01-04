import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs/Observable";
import {Tag, TagDetail} from "../model/tag.model";

@Injectable()
export class TagService {

  constructor(private http: HttpClient) {
  }

  tags(): Observable<Tag[]> {
    return this.http.get<Tag[]>(environment.endpoint + "/tags");
  }

  tag(id: number): Observable<TagDetail> {
    return this.http.get<TagDetail>(environment.endpoint + "/tag/" + id);
  }

}
