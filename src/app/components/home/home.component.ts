import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import fileInformation from 'src/app/fileInformation';

//declare const JPEGEncoder:any;
//declare const jpegImage:any;
//declare const encode:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
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

  constructor(private toastrService:ToastrService) {}


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

    

    //JPEGEncoder(5);
    //jpegImage();
    //encode(this.fileInputs,30)
  }
}
