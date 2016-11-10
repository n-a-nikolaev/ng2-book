import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductListComponent } from './list/product-list.component';
import { ProductDetailsComponent } from './details/product-details.component';

export const routes: Routes = [
    { path: 'products', component: ProductListComponent },
    { path: 'products/:id', component: ProductDetailsComponent }
]
export const ProductsRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);

@NgModule({
    imports: [
        ProductsRoutingModule
    ],
    declarations: [ProductListComponent, ProductDetailsComponent]
})
export class ProductsModule { }