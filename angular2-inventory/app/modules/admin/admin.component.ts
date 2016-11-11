import { Component, OnInit } from '@angular/core';

import { HttpService } from '../../shared/services/http.service';
import { IProduct } from '../../shared/interface/product.interface';
@Component({
    moduleId: module.id,
    selector: '.page-admin',
    templateUrl: 'admin.component.html'
})
export class AdminComponent implements OnInit {

    public products: IProduct[] = [];

    constructor(private http: HttpService) { }

    ngOnInit() {
        this.http.get('products.php').subscribe((response) => {
            if (!response.error) {
                this.products = response.data;
            }
        })
    }

}