import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { LoginComponent } from './components/login/login.component';
import { TestComponent } from './components/test/test.component';
// import { StylesComponent } from './components/styles/styles.component';
import { BookRideComponent } from './components/book-ride/book-ride.component';
// import { TimerComponent } from './components/timer/timer.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'book-ride', component: BookRideComponent },
  { path: 'test', component: TestComponent },
  // { path: 'timer', component: TimerComponent },
  // { path: 'styles', component: StylesComponent },
  { path: '', redirectTo: '/welcome', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
