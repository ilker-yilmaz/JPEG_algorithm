import { Component, OnInit } from '@angular/core';
import fileInformation from 'src/app/fileInformation';
import resultFileInformation from 'src/app/resultFileInformation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  
  date = new Date();
  
  fileInputs: fileInformation[] = [
    {
      lastModified: 1616406870666,
      lastModifiedDate: new Date(),
      name: '1.png',
      size: '1161',
      type: 'image/png',
    },
  ];
  
  resultFileOutputs: resultFileInformation[] = [
    {
      lastModified: this.date.getTime(),
      lastModifiedDate: new Date(),
      name: '1.png',
      size: '1161',
      type: 'image/png',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
