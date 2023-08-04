import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ComparisonImageComponent } from './comparison-image/comparison-image.component';
import { DropComponent } from './drop/drop.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { InputImageComponent } from './input-image/input-image.component';
import { OutputImageComponent } from './output-image/output-image.component';
import { FormsModule } from '@angular/forms';
import { NgxImageCompressService } from 'ngx-image-compress';
import { ToastrModule } from 'ngx-toastr';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ComparisonImageComponent,
    DropComponent,
    FooterComponent,
    HomeComponent,
    InputImageComponent,
    OutputImageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    }),

  ],
  providers:  [NgxImageCompressService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
