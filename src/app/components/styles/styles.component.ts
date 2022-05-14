import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-styles',
  templateUrl: './styles.component.html',
  styleUrls: ['./styles.component.scss']
})
export class StylesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  background = 'Yellow';
  color = 'red';
  isBordered = true;
  // isBordered = false;
}
