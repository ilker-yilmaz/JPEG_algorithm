import { Component, OnInit } from '@angular/core';
import fileInformation from 'src/app/fileInformation';

//declare const JPEGEncoder:any;
//declare const jpegImage:any;
declare var require:any;
declare const Buffer:any;
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

  resultFileOutputs: fileInformation[] = [
    {
      lastModified: this.date.getTime(),
      lastModifiedDate: new Date(),
      name: 'after.jpg',
      size: '1161',
      type: 'image/jpeg',
    },
  ];

  constructor() {}

  getFileInformation(file: object) {
    this.fileInputs[0].lastModified = 65342515243;
    (this.fileInputs[0].lastModifiedDate = new Date()),
      (this.fileInputs[0].name = 'before.png'),
      (this.fileInputs[0].size = '5545'),
      (this.fileInputs[0].type = 'image/png');
    console.log(this.fileInputs[0]);
  }

  getResultFileInformation(file: object) {
    this.resultFileOutputs[0].lastModified = 43434343434;
    (this.resultFileOutputs[0].lastModifiedDate = new Date()),
      (this.resultFileOutputs[0].name = 'after.jpg'),
      (this.resultFileOutputs[0].size = '6547'),
      (this.resultFileOutputs[0].type = 'image/jpeg');
    console.log(file);
  }

  ngOnInit(): void {
    
    this.getFileInformation(this.fileInputs);
    this.getResultFileInformation(this.resultFileOutputs);
    //JPEGEncoder(5);
    //jpegImage();
  }
}
