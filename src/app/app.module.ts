import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SettingsComponent } from './components/settings/settings.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { from } from 'rxjs';
import { ComparingComponent } from './components/comparing/comparing.component';
import { ComparingSliderComponent } from './components/comparing-slider/comparing-slider.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, SettingsComponent, ComparingComponent, ComparingSliderComponent],
  imports: [NgImageSliderModule, BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
