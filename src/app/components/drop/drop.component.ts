import { Component, OnInit } from '@angular/core';

declare const dropdrag: any;
declare const changeBeforeAfter: any;

@Component({
  selector: 'app-drop',
  templateUrl: './drop.component.html',
  styleUrls: ['./drop.component.css'],
})
export class DropComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    dropdrag();
    changeBeforeAfter();
  }
}
