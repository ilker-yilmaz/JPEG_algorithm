import { Component, OnInit } from '@angular/core';
import { NgxImageCompressService } from 'ngx-image-compress';
import fileInformation from 'src/app/fileInformation';

declare const dropdrag: any;
//declare const changeBeforeAfter: any;

@Component({
  selector: 'app-drop',
  templateUrl: './drop.component.html',
  styleUrls: ['./drop.component.css'],
})
export class DropComponent implements OnInit {
  date = new Date();

  resultFileOutputs: fileInformation[] = [
    {
      lastModified: this.date.getTime(),
      lastModifiedDate: new Date(),
      name: 'after.jpg',
      size: '1161',
      type: 'image/jpeg',
      encodingTime: '2 ms',
    },
  ];

  fileInputs: fileInformation[] = [
    {
      lastModified: 1616406870666,
      lastModifiedDate: new Date(),
      name: '1.png',
      size: '1161',
      type: 'image/png',
      encodingTime: '2 ms',
    },
  ];

  constructor(private imageCompress: NgxImageCompressService) {}

  file: any;
  localUrl: any;
  localCompressedURl: any;
  sizeOfOriginalImage: number | undefined;
  sizeOFCompressedImage: number | undefined;
  isHidden: boolean | undefined

  selectFile(event: any) {
    var fileName: any;
    this.file = event.target.files[0];
    fileName = this.file['name'];
    if (event.target.files && event.target.files[0]) {
      this.isHidden=true
      var reader = new FileReader();
      reader.onload = (event: any) => {
        this.localUrl = event.target.result;
        console.log(this.localCompressedURl)
        this.compressFile(this.localUrl, fileName);
      };
      reader.readAsDataURL(event.target.files[0]);
    }
    
  }
  imgResultBeforeCompress: string | undefined;
  imgResultAfterCompress: string | undefined;
  compressFile(image: string, fileName: any) {
    var orientation = -1;
    this.sizeOfOriginalImage =
      this.imageCompress.byteCount(image) / (1024 * 1024);
    console.warn('Size in bytes is now:', this.sizeOfOriginalImage);
    this.imageCompress
      .compressFile(image, orientation, 50, 50)
      .then((result) => {
        this.imgResultAfterCompress = result;
        this.localCompressedURl = result;
        this.sizeOFCompressedImage =
          this.imageCompress.byteCount(result) / (1024 * 1024);
        console.warn(
          'Size in bytes after compression:',
          this.sizeOFCompressedImage
        );
        // create file from byte
        const imageName = fileName;
        // call method that creates a blob from dataUri
        const imageBlob = this.dataURItoBlob(
          this.imgResultAfterCompress.split(',')[1]
        );
        //imageFile created below is the new compressed file which can be send to API in form data
        const imageFile = new File([result], imageName, { type: 'image/jpeg' });
      });
  }
  dataURItoBlob(dataURI: string) {
    const byteString = window.atob(dataURI);
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const int8Array = new Uint8Array(arrayBuffer);
    for (let i = 0; i < byteString.length; i++) {
      int8Array[i] = byteString.charCodeAt(i);
    }
    const blob = new Blob([int8Array], { type: 'image/jpeg' });
    return blob;
  }

  getResultFileInformation(file: object) {
    var date = new Date();
    this.resultFileOutputs[0].lastModified = date.getTime();
    (this.resultFileOutputs[0].lastModifiedDate = date),
      (this.resultFileOutputs[0].name = 'after.jpg'),
      (this.resultFileOutputs[0].size = '284.45 KB'),
      (this.resultFileOutputs[0].type = 'image/jpeg');
    this.resultFileOutputs[0].encodingTime = '2 ms';
    //console.log(file);
  }
  getFileInformation(file: object) {
    this.fileInputs[0].lastModified = 1619199497885;
    (this.fileInputs[0].lastModifiedDate = new Date()),
      (this.fileInputs[0].name = 'before.png'),
      (this.fileInputs[0].size = '611.72 KB'),
      (this.fileInputs[0].type = 'image/png');
    //console.log(this.fileInputs[0]);
  }
  ngOnInit(): void {
    dropdrag();
    this.getResultFileInformation(this.resultFileOutputs);
    //changeBeforeAfter();
    this.getResultFileInformation(this.resultFileOutputs);
  }
}
