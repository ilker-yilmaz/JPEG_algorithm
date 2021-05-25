import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import * as $ from "jquery";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  
  isHidden: boolean | undefined;

  constructor(private toastrService:ToastrService) {}


  ngOnInit(): void {
    
    //sayfamız ilk yüklendiğinde iyi tasarımın 10 temel ilkesi prensiplerine dayanarak kullanıcıya daha sade bir arayüz sunuyoruz
    $(".hiddenElementBeforeCompress").hide();
    
    this.toastrService.success("Hoşgeldiniz")
    this.toastrService.info("Görüntülerinizi çevrimiçi ve ücretsiz olarak sıkıştırabilirsiniz. Bu sayede depolama alanınızda yer açabilirsiniz.","Hakkında")
    

  }
  
}
