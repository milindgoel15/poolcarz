import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { RidedetailsComponent } from '../ridedetails/ridedetails.component';

@Component({
  selector: 'app-book-ride',
  templateUrl: './book-ride.component.html',
  styleUrls: ['./book-ride.component.scss']
})
export class BookRideComponent implements OnInit {

  startPoint!: string;
  showSelectedRide!: boolean;
  condition!: false;
  rideFilterOption!: string;
  
  constructor(public router: Router) { }
  ngOnInit(): void {
  }

  availableRides: any[] = [
    { startPoint: "Vanrose Junction", endPoint: "Office", seatAvail: "3"},
    { startPoint: "PTP", endPoint: "Office", seatAvail: "2"},
    { startPoint: "Office", endPoint: "East Fort", seatAvail: "7"},
    { startPoint: "Office", endPoint: "Central Mall", seatAvail: "5"}
  ];
  transform(rideFilter: string) {
    this.rideFilterOption = rideFilter;
 }

}