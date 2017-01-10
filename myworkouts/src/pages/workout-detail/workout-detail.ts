import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {WorkoutService} from "../../providers/workout-service";
import {WorkoutPage} from "../workout/workout";

/*
  Generated class for the WorkoutDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-workout-detail',
  templateUrl: 'workout-detail.html'
})
export class WorkoutDetailPage {

  public workout: any;
  public result: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private workoutService: WorkoutService) {
    this.workout = navParams.get('workout');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WorkoutDetailPage');
  }

  deleteWorkout(workoutId) {
    this.workoutService.deleteWorkout(workoutId).subscribe(data => {
      this.result = data;
    });

    this.navCtrl.push(WorkoutPage);
  }
}
