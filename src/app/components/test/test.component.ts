import { Component, OnInit, ViewEncapsulation, 
  ViewChild,
  ElementRef} from '@angular/core';
import { TimerComponent } from '../timer/timer.component';
import { ColorDirective } from './color.directive';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TestComponent implements OnInit {
  myMessage = 'Click to see structural directive page';

  constructor() { }

  show!: boolean;

  regMessage!: string;
  courseReg(courseName: string) {
    this.regMessage = `Your registration for ${courseName} is successful!`;
  }

  value = 0;
  nextChoice() {
    this.value++;
  }

  imgUrl = "../../../assets/img.jpg";

  colValue: string = "2";

  primary = 'blue';
  secondary = 'yellow'
  isValid = true

  appName = "Angular"
  exists: Boolean = true

  title = "Car details"
  carCode = "car_c001"
  carName = "Swift"


  productTitle = 'product details';
  productCode = 'PROD_P001';
  productName = 'Apple MPTT2 MacBook Pro';
  productPrice = 217021;
  purchaseDate = '1/17/2018';
  productTax = '0.1';
  productRating = 4.92;

  product: object = {
    productCode: 'PROD_P001',
    productName: 'Apple MPTT2 MacBook Pro',
    productPrice: 217021,
    purchaseDate: '1/17/2018',
    productTax: '0.1',
    productRating: 4.92,
  }

  productRatings: number[] = [4, 3, 2, 4, 1];
  productMapping: { [k: string]: string } = {
    '=4': '# - Excellent',
    '=3': '# - Good',
    '=2': '# - Average',
    'other': '# - Very Bad'
  }

  message!: string;
  messageMap: any = {
    en: 'Good Morning',
    fr: 'Bonjour',
    es: 'Buenos días',
    de: 'Guten Morgen',
  }
  
  sortOption: string = "Please Choose";
  productLists: any = [
    { productName: 'Samsung Galaxy S22 Ultra', price: 118999},
    { productName: 'Google Pixel 6 5G', price: 61990},
    { productName: 'Redmi Note 11 Pro', price: 17999},
    { productName: 'Apple iPhone 13', price: 79900},
    { productName: 'Motorola Edge 20', price: 29999},
  ]


  data = 'Angular';
  ngOnInit() {
    console.log('init')
  }

  ngDoCheck(): void {
    console.log('Change detected')
  }

  ngAfterContentInit(): void {
    console.log('After content init')
  }

  // ngAfterViewInit(): void {
  //   console.log('After view init')
  // }

  ngAfterViewChecked(): void {
    console.log('After view checked')
  }

  ngOnDestory(): void {
    console.log('Destroyed')
  }

  @ViewChild(TimerComponent) timerComponent!: TimerComponent;
  startTimer() {
    this.timerComponent.begin();
  }
  stopTimer() {
    this.timerComponent.end();
  }

  @ViewChild(ColorDirective) colorDirective!: ColorDirective;
  modifyColor(color: string) {
    this.colorDirective.modifyColor(color);
  }

  @ViewChild('heading') heading!: ElementRef;
  ngAfterViewInit() {
    this.heading.nativeElement.style.color = 'red';
  }
}