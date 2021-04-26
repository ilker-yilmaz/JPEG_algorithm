import { Component, OnInit } from '@angular/core';

declare const beforeAfter:any

@Component({
  selector: 'app-imagecomparison',
  templateUrl: './imagecomparison.component.html',
  styleUrls: ['./imagecomparison.component.css']
})
export class ImagecomparisonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    beforeAfter();
  }

}
