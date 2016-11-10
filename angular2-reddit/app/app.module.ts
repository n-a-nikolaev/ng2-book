import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormComponent } from './form.component';
import { ListComponent } from './list.component';
import { ArticleComponent } from './article.component';
import { ArticleService } from './article.service';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, FormComponent, ListComponent, ArticleComponent],
  providers: [ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
