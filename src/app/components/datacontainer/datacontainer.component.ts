import { Component, OnInit, OnDestroy } from "@angular/core";
import { UsersService } from "../../services/users.service";

import { IUser } from "../../models/user";

@Component({
  selector: "app-datacontainer",
  templateUrl: "./datacontainer.component.html",
  styleUrls: ["./datacontainer.component.css"]
})
export class DatacontainerComponent implements OnInit, OnDestroy {
  users: IUser[];
  loaded: boolean;
  pageNumber: number;

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.loaded = false;
    this.refreshData(1);
    this.usersService.parameterChange.subscribe(data => {
      this.loaded = false;
      this.refreshData(parseInt(data));
    });
  }

  ngOnDestroy() {
    this.usersService.parameterChange.unsubscribe();
  }

  refreshData(pageNumber: number) {
    setTimeout(() => {
      this.usersService.getUsers(pageNumber).subscribe(
        data => {
          this.users = data;
          // An observable is asynchronous. Therefore, if you put the following
          // line is the callee, it would be implemented before the Observable
          // returns.
          this.loaded = true;
        },
        err => console.log(err)
        // () => console.log("Done loading users")
      );
    }, 1000);
  }
}
