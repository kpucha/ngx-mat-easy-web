import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NgxMatEasyModule } from "projects/ngx-mat-easy/src/public-api";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, NgxMatEasyModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
