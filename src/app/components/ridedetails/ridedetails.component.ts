  import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ridedetails',
  templateUrl: './ridedetails.component.html',
  styleUrls: ['./ridedetails.component.scss'],
  exportAs: 'rideDetails'
})
export class RidedetailsComponent implements OnInit {

  rideOptions!: any[];
  
  constructor() { }
  ngOnInit(): void {
  };
  selectedRides = [
  { id: "1", name: "Manu", car: "BMW", seatsAvail: "6", startPoint: "Office", endPoint: "East Fort"},
  { id: "1", name: "Manu", car: "Audi", seatsAvail: "4", startPoint: "Office", endPoint: "Central Mall"}
  ];

  rideNames(startPoint: string) {
    this.rideOptions = [];
    for (var i = 0; i < this.selectedRides.length; i++) {
      if (this.selectedRides[i].startPoint === startPoint) {
        this.rideOptions.push(this.selectedRides[i]);
      }
    }
  }

}
