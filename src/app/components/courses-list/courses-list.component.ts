import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
  exportAs: 'courseList'
})
export class CoursesListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() registerEvent = new EventEmitter<string>();

  courses = [
    { courseId: 1, courseName: "TypeScript" },
    { courseId: 2, courseName: "Angular" },
    { courseId: 3, courseName: "Node JS" },
    { courseId: 4, courseName: "React JS" }
  ];

  course!: any[];
  changeCourse(name: string) {
    this.course = [];
    for (let i = 0; i < this.courses.length; i++) {
      if (this.courses[i].courseName === name) {
        this.course.push(this.courses[i]);
      }
    }
  }

  register(courseName: string) {
    this.registerEvent.emit(courseName);
  }
}
