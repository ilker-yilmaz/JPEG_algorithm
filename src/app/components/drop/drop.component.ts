import { Component, OnInit } from '@angular/core';
import { NgxImageCompressService } from 'ngx-image-compress';
import { ToastrService } from 'ngx-toastr';

declare const dropdrag: any;
//declare const changeBeforeAfter: any;

@Component({
  selector: 'app-drop',
  templateUrl: './drop.component.html',
  styleUrls: ['./drop.component.css'],
})
export class DropComponent implements OnInit {
  constructor(
    private imageCompress: NgxImageCompressService,
    private toastrService: ToastrService
  ) {}

  file: any;
  localUrl: any;
  localCompressedURl: any;
  sizeOfOriginalImage: number | undefined;
  mySizeOfOriginalImage: string | undefined;
  sizeOFCompressedImage: number | undefined;
  mySizeOFCompressedImage: string | undefined;
  isHidden: boolean | undefined;
  myquality:number | undefined

  selectFile(event: any) {
    var fileName: any;
    this.file = event.target.files[0];
    fileName = this.file['name'];
    if (
      event.target.files &&
      event.target.files[0] &&
      event.target.files[0].type.startsWith('image/')
    ) {
      this.isHidden = true;
      var reader = new FileReader();
      reader.onload = (event: any) => {
        this.localUrl = event.target.result;
        //console.log(this.localCompressedURl);
        this.compressFile(this.localUrl, fileName);
      };
      reader.readAsDataURL(event.target.files[0]);
    } else this.toastrService.error('Lütfen geçerli bir dosya seçiniz');
  }
  imgResultBeforeCompress: string | undefined;
  imgResultAfterCompress: string | undefined;

  compressFile(image: string, fileName: any) {
   
    var inputImage = document.getElementById("inputImage");
  var outputImage = document.getElementById("outputImage");

    //console.log(this.quality)
    var orientation = -1;

    this.sizeOfOriginalImage =
      this.imageCompress.byteCount(image) / (1024 * 1024);

      //görüntü boyutu: satır*sütun*bpp
      //bpp: görüntü boyutu / satır*sütun
      var inputWidth=inputImage?.clientWidth;
      var inputHeight=inputImage?.clientHeight;
      var outputSize=this.sizeOfOriginalImage*1024*1024;

      //calculatePSNRandBPP(inputWidth,inputHeight,outputSize)

     
    console.warn('Size in bytes is now:', this.sizeOfOriginalImage*1024*1024);

    var quality = document.getElementById('inputQuality') as HTMLSelectElement;
    var ourQuality=quality.selectedIndex

     var newquality;
    this.myquality = newquality
    
    quality?.addEventListener('change', function () {
       var selectedQuality = quality.selectedIndex*10;
      // newquality = selectedQuality
      // console.warn(selectedQuality);
      // console.warn(newquality)
      ourQuality=selectedQuality
      
    });
    
    this.imageCompress
      .compressFile(image, orientation, 50, 60)
      .then((result) => {
        console.log(this.myquality)
        this.imgResultAfterCompress = result;
        this.localCompressedURl = result;
        this.sizeOFCompressedImage =
          this.imageCompress.byteCount(result) / (1024 * 1024);
        console.warn(
          'Size in bytes after compression:',
          this.sizeOFCompressedImage*1024*1024
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
    console.log(blob)
    return blob;
  }

   

  ngOnInit(): void {
    dropdrag();
    //this.getResultFileInformation(this.resultFileOutputs);
    //changeBeforeAfter();
    //this.getResultFileInformation(this.resultFileOutputs);
    //this.toastrService.success("Hoşgeldiniz")
    this.toastrService.info(
      'Görüntülerinizi çevrimiçi ve ücretsiz olarak sıkıştırabilirsiniz. Bu sayede depolama alanınızda yer açabilirsiniz.',
      'Hakkında'
    );
  }
}
function calculatePSNRandBPP(inputWidth: number | undefined, inputHeight: number | undefined, outputSize: number) {
  throw new Error('Function not implemented.');
}

