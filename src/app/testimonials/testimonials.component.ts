import { Component, OnInit } from '@angular/core';

//import the service
import {TestimonialsService} from "../testimonials.service";


@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {
  //properties
  usersArray: any[]


  constructor(private testimonialsService: TestimonialsService) { }

  ngOnInit() {
    //subscribe to the service
    this.testimonialsService.getUsers().subscribe((response)=>{
      //get the results inside the response object
      let users = response["results"];
      this.usersArray = [];
      users.forEach(user => {
        //create an array with the users
       
        //push the users to the array  
        this.usersArray.push(user);

        console.log(this.usersArray);
      });
      
    });
 
  }

}
