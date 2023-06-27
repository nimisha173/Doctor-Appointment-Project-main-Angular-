import { Component, OnInit } from '@angular/core';
import { ReviewService } from '../service/review.service';
import { Router } from '@angular/router';
import { Review } from './review';
import { AppointmentService } from '../service/appointment.service';
import { Doctor } from './Doctor';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit{
  Id:any
  doctor:Doctor=new Doctor();
  ngOnInit(): void {
  
  }
    
  
    submit(Id:number){
    this.appointmentservice.getAppointment(Id).subscribe(
    (i)=>{
      
      this.review.appointmentId=i.appointmentId;
      this.review.doctorId=i.doctorId;
      this.review.userId=i.userId;
    })
    
    
  }
  constructor(private reviewservice:ReviewService,private router: Router,private appointmentservice:AppointmentService){}
  review:Review=new Review();
  
  saveProduct(){
    this.reviewservice.saveReview(this.review).subscribe((res: any)=>
    {
      console.log(res);
    },(error: any) => {
      console.log(error);
    });
  }
}
