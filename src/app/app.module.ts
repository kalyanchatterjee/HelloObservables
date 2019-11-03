import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

// Services
import { UsersService } from "./services/users.service";
import { ApiusersService } from "./services/apiusers.service";

import { AppComponent } from "./app.component";
import { FilterComponent } from "./components/filter/filter.component";
import { MainComponent } from "./components/main/main.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { DatacontainerComponent } from "./components/datacontainer/datacontainer.component";

@NgModule({
  declarations: [
    AppComponent,
    FilterComponent,
    MainComponent,
    NavbarComponent,
    DatacontainerComponent
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [UsersService, ApiusersService],
  bootstrap: [AppComponent]
})
export class AppModule {}
