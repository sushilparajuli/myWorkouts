import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import {WorkoutService} from  '../../providers/workout-service'
import {WorkoutsPage} from '../../pages/workouts/workouts' 
/*
  Generated class for the WorkoutDetails page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-workout-details',
  templateUrl: 'workout-details.html',
  providers: [ WorkoutService ]
})
export class WorkoutDetailsPage {
workout:any
result:any;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public workoutService:WorkoutService,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController
    ) {
    this.workout = this.navParams.get('workout')
  }

  ionViewDidLoad() {
    
  }

  deleteWorkout(workoutid){
    let confirm = this.alertCtrl.create({
      title: 'Delete Workout',
      message: 'Are you sure to delete the workout',
      buttons: [
        {
          text: 'Disagree',
          handler: () => {
            let toast = this.toastCtrl.create({
              message: "Your haven't deleted the workout",
              duration: 3000
            });
            toast.present();
            //console.log('Disagree clicked');
          }
        },
        {
          text: 'Agree',
          handler: () => {
              this.workoutService.deleteWorkout(workoutid).subscribe(data=>{
      this.result= data;
    },
    err=>console.log(err),
    ()=>{
      
    } 

    );
    this.navCtrl.push(WorkoutsPage);
          }
        }
      ]
    });
    confirm.present();
     //Add Workout
 
  }

}
