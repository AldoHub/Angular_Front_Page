import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';


//import the service
import {TestimonialsService} from "./testimonials.service";

@NgModule({
  declarations: [
    AppComponent,
    TestimonialsComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [TestimonialsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
