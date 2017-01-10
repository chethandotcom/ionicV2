import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the WorkoutService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class WorkoutService {

  http: any;
  apikey: String;
  workoutsURL: String;

  constructor(http: Http) {
    this.http = http;
    this.apikey = 'HmNn8h_bQAx18-0ITpVZvBEjbHRO-Psk';
    this.workoutsURL = 'https://api.mlab.com/api/1/databases/myworkouts/collections/workouts';
  }

  getWorkouts() {
    return this.http.get(this.workoutsURL+'?apiKey='+this.apikey)
      .map(res => res.json());
  }

  addWorkout(workout) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.post(this.workoutsURL+'?apiKey='+this.apikey, JSON.stringify(workout), {headers: headers})
      .map(res => res.json());
  }

  deleteWorkout(workoutId) {
    return this.http.delete(this.workoutsURL+'/'+workoutId+'?apiKey='+this.apikey)
      .map(res => res.json());
  }
}
