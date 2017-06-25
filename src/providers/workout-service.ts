import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the WorkoutServiceTs provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class WorkoutService {
 apiKey: string
 workoutsUrl: string

 
  constructor(public http: Http) {
    this.http = http;
    this.apiKey = 'XH4Jye-Q78sbUFV6-vXQB7k0Ks_8R5gM';
    this.workoutsUrl = 'https://api.mlab.com/api/1/databases/myworkoutapp/collections/workouts';
  }
  getWorkouts(){
    return this.http.get(this.workoutsUrl+'?apiKey='+this.apiKey)
      .map(res=> res.json());
  }
  addWorkout(workout){
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.workoutsUrl+'?apiKey='+this.apiKey, JSON.stringify(workout),{headers:headers})
      .map(res=>res.json());
  }

  deleteWorkout(workoutId){
return this.http.delete(this.workoutsUrl+'/'+ workoutId+'?apiKey='+this.apiKey)
      .map(res=> res.json());
  }
}
