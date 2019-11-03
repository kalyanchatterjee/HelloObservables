import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { UsersService } from "../../services/users.service";

import { IUser } from "../../models/user";

@Component({
  selector: "app-filter",
  templateUrl: "./filter.component.html",
  styleUrls: ["./filter.component.css"]
})
export class FilterComponent implements OnInit {
  user: IUser;
  newUser: string;
  @Output() refreshedUsers: EventEmitter<IUser[]> = new EventEmitter();

  constructor(private usersService: UsersService) {}

  ngOnInit() {}

  onChange(optionValue) {
    this.usersService.parameterChange.next(optionValue);
  }
}
