import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { HomeModule } from './modules/home/home.module';
import { NavigationComponent } from './components/navigation/navigation.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HomeModule,
    AppRoutingModule
  ],
  declarations: [AppComponent, NavigationComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
