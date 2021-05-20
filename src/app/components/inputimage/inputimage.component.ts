import { Component, OnInit } from '@angular/core';

import fileInformation from 'src/app/fileInformation';


@Component({
  selector: 'app-inputimage',
  templateUrl: './inputimage.component.html',
  styleUrls: ['./inputimage.component.css']
})
export class InputimageComponent implements OnInit {

  date = new Date();

  fileInputs: fileInformation[] = [
    {
      lastModified: 1616406870666,
      lastModifiedDate: new Date(),
      name: '1.png',
      size: '1161',
      type: 'image/png',
      encodingTime:'2 ms'
    },
  ];


  constructor() { }

  
  getFileInformation(file: object) {
    this.fileInputs[0].lastModified = 1619199497885;
    (this.fileInputs[0].lastModifiedDate = new Date()),
      (this.fileInputs[0].name = 'before.png'),
      (this.fileInputs[0].size = '611.72 KB'),
      (this.fileInputs[0].type = 'image/png');
    //console.log(this.fileInputs[0]);
  }

  ngOnInit(): void {

    this.getFileInformation(this.fileInputs);

  }

}
