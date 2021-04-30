import { Component, OnInit } from '@angular/core';
import fileInformation from 'src/app/fileInformation';

declare const data: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  
  fileInputs: fileInformation[] = [
    {
      lastModified: '1618054304012',
      lastModifiedDate: 'Sat Apr 10 2021 14:31:44 GMT+0300 (GMT+03:00)',
      name: '1.png',
      size: '1161',
      type: 'image/png',
    },
  ];
  constructor() {}

  ngOnInit(): void {
    data();
  }
}
