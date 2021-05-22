import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ImageCompressComponent } from './components/image-compress/image-compress.component'


const routes: Routes = [{path:'home',component:ImageCompressComponent},
{ path: '', redirectTo: 'home', pathMatch: 'full' },
{ path: '**', redirectTo: 'home', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
