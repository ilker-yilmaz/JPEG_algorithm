import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations"


import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DropComponent } from './components/drop/drop.component';
import { environment } from 'src/environments/environment';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SharebuttonComponent } from './components/sharebutton/sharebutton.component';
import { DeadlineanimationComponent } from './components/deadlineanimation/deadlineanimation.component';

import {ToastrModule} from "ngx-toastr";
import { ComparisonimageComponent } from './components/comparisonimage/comparisonimage.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DropComponent,
    NavbarComponent,
    SharebuttonComponent,
    DeadlineanimationComponent,
    ComparisonimageComponent,
  ],
  imports: [
    BrowserModule, 
    FormsModule, 
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}

