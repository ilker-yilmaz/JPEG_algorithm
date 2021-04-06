import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NaviComponent } from './components/navi/navi.component';
import { HomeComponent } from './components/home/home.component';
import { SettingsComponent } from './components/settings/settings.component';
import { ComparingComponent } from './components/comparing/comparing.component';
import { NgImageSliderModule } from 'ng-image-slider';

@NgModule({
  declarations: [
    
    AppComponent,
    NaviComponent,
    HomeComponent,
    SettingsComponent,
    ComparingComponent,
  ],
  imports: [NgImageSliderModule, BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
