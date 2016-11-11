import { Component, OnInit, Input, Output } from '@angular/core';

import { IProduct } from '../../shared/interface/product.interface';

@Component({
    moduleId: module.id,
    selector: 'product-list',
    templateUrl: 'product-list.component.html'
})
export class ProductListComponent implements OnInit {

    @Input() products: IProduct[];

    constructor() { }

    ngOnInit() {}
}