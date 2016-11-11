import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from './products.component';
import { ProductDetailsComponent } from './details/product-details.component';

export const routes: Routes = [
    { path: 'products', component: ProductsComponent },
    { path: 'products/:id', component: ProductDetailsComponent }
]
export const ProductsRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);

@NgModule({
    imports: [
        ProductsRoutingModule
    ],
    declarations: [ProductsComponent, ProductDetailsComponent]
})
export class ProductsModule { }