import { Component, OnInit } from '@angular/core';
declare const myTest:any;

@Component({
  selector: 'app-comparing',
  templateUrl: './comparing.component.html',
  styleUrls: ['./comparing.component.css']
})
export class ComparingComponent implements OnInit {

  constructor() { }

  onClick(){
    myTest();
  }

  ngOnInit(): void {
  }
  
  

  imageObject: Array<object> = [{
    image: 'src/app/components/comparing/before.jpg',
    thumbImage: 'before.jpg',
    alt: 'orijinal görüntü',
    title: 'orijinal görüntü'
}, {
    image: '.../InputUrl', // Support base64 image
    thumbImage: '.../OutputUrl', // Support base64 image
    title: 'sıkıştırılmış görüntü', //Optional: You can use this key if want to show image with title
    alt: 'sıkıştırılmış görüntü' //Optional: You can use this key if want to show image with alt
}
];

}
