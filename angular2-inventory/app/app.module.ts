import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { HomeModule } from './modules/home/home.module';
import { ProductsModule } from './modules/products/product.module';
import { CartModule } from './modules/cart/cart.module';
import { AdminModule } from './modules/admin/admin.module';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ProductListComponent } from './components/product-list/product-list.component';

import { HttpService } from './shared/services/http.service';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    HttpModule,
    FormsModule,
    HomeModule,
    ProductsModule,
    CartModule,
    AdminModule,
    AppRoutingModule
  ],
  declarations: [AppComponent, NavigationComponent, ProductListComponent],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
