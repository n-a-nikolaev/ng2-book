import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShoppingCartComponent } from './cart.component';

export const routes: Routes = [
    { path: 'cart', component: ShoppingCartComponent },
]
export const CartRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);

@NgModule({
    imports: [
        CartRoutingModule
    ],
    declarations: [ShoppingCartComponent]
})
export class CartModule { }