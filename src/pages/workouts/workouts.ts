import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {WorkoutService} from  '../../providers/workout-service'
import {WorkoutDetailsPage} from '../workout-details/workout-details'

@Component({
  selector: 'page-workouts',
  templateUrl: 'workouts.html',
  providers: [ WorkoutService ]
})
export class WorkoutsPage  {
workouts:any

  constructor(public navCtrl: NavController, public workoutService:WorkoutService) {
     this.workoutService.getWorkouts().subscribe(workouts=>{
      this.workouts = workouts
    });
   
  }
  ngOnInit(){
   
  }

  ionViewDidLoad() {
     this.workoutService.getWorkouts().subscribe(workouts=>{
      this.workouts = workouts
    });
  }

  workoutSelected(event,workout){
    this.navCtrl.push(WorkoutDetailsPage,{
      workout:workout
    });
  }

}
