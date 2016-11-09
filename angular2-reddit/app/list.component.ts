interface Article {
    title: string;
    link: string;
}

import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'article-list',
    templateUrl: 'list.component.html'
})
export class ListComponent implements OnInit {

    private list: Article[];

    constructor() { }

    ngOnInit() {

    }

}