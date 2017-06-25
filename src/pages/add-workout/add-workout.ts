import { Component } from '@angular/core';
import {WorkoutService} from  '../../providers/workout-service'
import { NavController } from 'ionic-angular';
import {WorkoutsPage} from '../../pages/workouts/workouts' 
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-add-workout',
  templateUrl: 'add-workout.html',
  providers: [ WorkoutService ]
})
export class AddWorkoutPage {
title:string
note:string
type:string
result:any

  constructor(
    public navCtrl: NavController , 
    public workoutService:WorkoutService,
    public alertCtrl: AlertController
    ) {

  }
  onSubmit(){
    let workout = {
      title: this.title,
      note: this.note,
      type : this.type
    }
    //Add Workout
    this.workoutService.addWorkout(workout).subscribe(data=>{
      this.result= data;
    },
    err=>console.log(err),
    ()=> {
      let alert = this.alertCtrl.create({
      title: 'Workout Added',
      subTitle: 'You have added the workout',
      buttons: ['OK']
    });
    alert.present();
      this.navCtrl.push(WorkoutsPage);
    });
  }

}
