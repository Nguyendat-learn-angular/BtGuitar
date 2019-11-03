import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import {RouterModule,Route} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HttpClient } from 'selenium-webdriver/http';
import { GuitarComponent } from './guitar/guitar.component';
import { PianoComponent } from './piano/piano.component';
import { TrongComponent } from './trong/trong.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GuitarComponent,
    PianoComponent,
    TrongComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'',component:HomeComponent},

      {path:'home',component:HomeComponent},
      {path:'guitar',component:GuitarComponent},
      {path:'piano',component:PianoComponent},
      {path:'trong',component:TrongComponent},
      // {path:'sanpham/:id',component:HomeComponent},
      {path:'sanpham/:id',component:HomeComponent},
      {path:'sanpham/1',component:GuitarComponent},
      {path:'sanpham/2',component:PianoComponent},
      {path:'sanpham/3',component:TrongComponent},
      {path:'**',redirectTo:"home",pathMatch:"full"}
    ])
    
  ],
  providers: [],
  bootstrap: [AppComponent] 
})
export class AppModule { }
