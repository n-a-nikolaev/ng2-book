import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HttpService } from '../../shared/services/http.service';
import { AdminComponent } from './admin.component';

export const routes: Routes = [
    { path: 'admin', component: AdminComponent }
];
export const AdminRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);

@NgModule({
    imports: [
        CommonModule,
        AdminRoutingModule
    ],
    providers: [HttpService],
    declarations: [AdminComponent]
})
export class AdminModule { }

