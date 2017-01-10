import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {WorkoutService} from "../../providers/workout-service";
import {WorkoutDetailPage} from "../workout-detail/workout-detail";

/*
  Generated class for the Workout page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-workout',
  templateUrl: 'workout.html'
})
export class WorkoutPage {

  workouts: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private workoutService: WorkoutService) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad WorkoutPage');
  }

  ionViewWillEnter() {
    this.workoutService.getWorkouts().subscribe(workouts => {
      this.workouts = workouts;
    });
  }

  ngOnInit() {
    this.workoutService.getWorkouts().subscribe(workouts => {
      this.workouts = workouts;
    });
  }

  workoutSelected(event, workout) {
    this.navCtrl.push(WorkoutDetailPage, {
      workout: workout
    });
  }
}
