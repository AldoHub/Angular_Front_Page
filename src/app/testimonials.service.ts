import { Injectable } from '@angular/core';
//import the http client module
import {HttpClient} from "@angular/common/http"; 


@Injectable()
export class TestimonialsService {

  constructor(private httpClient: HttpClient) { }
  
  getUsers(){
   return this.httpClient.get("https://randomuser.me/api/?results=6");
  }
  

}
