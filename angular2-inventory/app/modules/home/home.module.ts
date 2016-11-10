import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
];
export const HomeRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);

@NgModule({
    imports: [
        HomeRoutingModule
    ],
    declarations: [HomeComponent]
})
export class HomeModule { }

