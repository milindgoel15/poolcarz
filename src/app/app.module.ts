import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { LoginComponent } from './components/login/login.component';
import { TestComponent } from './components/test/test.component';
import { RepeatDirective } from './components/test/repeat.directive';
// import { StylesComponent } from './components/styles/styles.component';
import { MessageDirective } from './message.directive';
import { BookRideComponent } from './components/book-ride/book-ride.component';
import { ShowDirective } from './components/book-ride/show.directive';
import { MouseHoverDirective } from './components/book-ride/mouse-hover.directive';
import { SortPipe } from './components/test/sort.pipe';
import { RideFilterPipe } from './components/book-ride/ride-filter.pipe';
import { CoursesListComponent } from './components/courses-list/courses-list.component';
import { ChildComponent } from './components/child/child.component';
import { TimerComponent } from './components/timer/timer.component';
import { ColorDirective } from './components/test/color.directive';
import { RidedetailsComponent } from './components/ridedetails/ridedetails.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    TestComponent,
    RepeatDirective,
    // StylesComponent,
    MessageDirective,
    BookRideComponent,
    ShowDirective,
    MouseHoverDirective,
    SortPipe,
    RideFilterPipe,
    CoursesListComponent,
    ChildComponent,
    TimerComponent,
    ColorDirective,
    RidedetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
