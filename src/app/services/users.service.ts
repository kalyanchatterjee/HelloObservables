import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Subject } from "rxjs";
import { map } from "rxjs/operators";

import { IUser } from "../models/user";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};

@Injectable({
  providedIn: "root"
})
export class UsersService {
  private getUsersUrl: string = "https://reqres.in/api/users";

  constructor(private http: HttpClient) {}

  // We have casted the observable into an array of type User
  getUsers(page: number): Observable<IUser[]> {
    if (page === undefined) {
      page = 1;
    }
    return this.http
      .get<IUser[]>(this.getUsersUrl + "?page=" + page)
      .pipe(map(result => result["data"]));
  }

  parameterChange = new Subject<string>();
}
