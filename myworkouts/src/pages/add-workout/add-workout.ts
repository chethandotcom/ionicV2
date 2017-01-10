import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {WorkoutService} from "../../providers/workout-service";
import {WorkoutPage} from "../workout/workout";

/*
  Generated class for the AddWorkout page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-add-workout',
  templateUrl: 'add-workout.html'
})
export class AddWorkoutPage {

  public title: string;
  public note: string;
  public type: string;
  public result: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private workoutService: WorkoutService) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddWorkoutPage');
  }

  onSubmit() {
    var workout = {
      title: this.title,
      note: this.note,
      type: this.type
    }

    // Add workout
    this.workoutService.addWorkout(workout).subscribe(data => {
      this.result = data;
    });

    this.navCtrl.push(WorkoutPage);
  }

}
