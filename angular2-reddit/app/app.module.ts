import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormComponent } from './form.component';
import { ListComponent } from './list.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, FormComponent, ListComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
