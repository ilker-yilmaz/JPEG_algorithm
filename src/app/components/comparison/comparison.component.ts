import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comparison',
  template: '<nav class="navbar">  <!-- logo --><div class="navbar-brand"><a class="navbar-item"><img src="assets/img/before.jpg"></a></div></nav>',
  templateUrl: './comparison.component.html',
  styleUrls: ['./comparison.component.css']
})
export class ComparisonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
