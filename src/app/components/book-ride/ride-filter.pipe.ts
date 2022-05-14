import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rideFilter'
})
export class RideFilterPipe implements PipeTransform {

  filteredArray!: any[];
  transform(value: any[], args: string): any[] {
    let place = 'Office';
    switch (args) {
      case 'toOffice':
        this.filteredArray = value.filter(item => item.endPoint === place);
        break;
        
      case 'fromOffice':
        this.filteredArray = value.filter(item => item.startPoint === place);
        break;

      case 'others':
        this.filteredArray = value;
        break;

      default:
        this.filteredArray = value;
    }
    return this.filteredArray;
  }
}