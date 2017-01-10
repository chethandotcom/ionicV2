import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import {WorkoutPage} from "../pages/workout/workout";
import {WorkoutService} from "../providers/workout-service";
import {WorkoutDetailPage} from "../pages/workout-detail/workout-detail";
import {AddWorkoutPage} from "../pages/add-workout/add-workout";

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    WorkoutPage,
    WorkoutDetailPage,
    AddWorkoutPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    WorkoutPage,
    WorkoutDetailPage,
    AddWorkoutPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, WorkoutService]
})
export class AppModule {}
