import { Component, OnInit } from '@angular/core';

import fileInformation from 'src/app/fileInformation';

declare const fileAndSettingsSendToEncode:any

@Component({
  selector: 'app-outputimage',
  templateUrl: './outputimage.component.html',
  styleUrls: ['./outputimage.component.css']
})
export class OutputimageComponent implements OnInit {

  date = new Date();

  resultFileOutputs: fileInformation[] = [
    {
      lastModified: this.date.getTime(),
      lastModifiedDate: new Date(),
      name: 'after.jpg',
      size: '1161',
      type: 'image/jpeg',
      encodingTime: '2 ms'
    },
  ];

  constructor() { }

  
  getResultFileInformation(file: object) {
    
    var date = new Date();
    this.resultFileOutputs[0].lastModified = date.getTime();
    (this.resultFileOutputs[0].lastModifiedDate = date),
      (this.resultFileOutputs[0].name = 'after.jpg'),
      (this.resultFileOutputs[0].size = '284.45 KB'),
      (this.resultFileOutputs[0].type = 'image/jpeg');
      (this.resultFileOutputs[0].encodingTime='2 ms');
    //console.log(file);
  }

  ngOnInit(): void {
    this.getResultFileInformation(this.resultFileOutputs);
    ///fileAndSettingsSendToEncode(this.resultFileOutputs,50)
  }

}
