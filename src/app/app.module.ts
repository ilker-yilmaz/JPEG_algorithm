import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations"

import { AngularFirestoreModule } from '@angular/fire/firestore';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ComparisonComponent } from './components/comparison/comparison.component';
import { DropComponent } from './components/drop/drop.component';
import { AnimationsComponent } from './components/animations/animations.component';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { ImagecomparisonComponent } from './components/imagecomparison/imagecomparison.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SharebuttonComponent } from './components/sharebutton/sharebutton.component';
import { DeadlineanimationComponent } from './components/deadlineanimation/deadlineanimation.component';

import {ToastrModule} from "ngx-toastr";
import { ComparisonimageComponent } from './components/comparisonimage/comparisonimage.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ComparisonComponent,
    DropComponent,
    AnimationsComponent,
    ImagecomparisonComponent,
    NavbarComponent,
    SharebuttonComponent,
    DeadlineanimationComponent,
    ComparisonimageComponent,
  ],
  imports: [
    BrowserModule, 
    FormsModule, 
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
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

