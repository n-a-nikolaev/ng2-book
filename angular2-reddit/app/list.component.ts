import { Component, OnInit, Input } from '@angular/core';

import { Article } from './article.interface';
import { ArticleService } from './article.service';

@Component({
    moduleId: module.id,
    selector: 'article-list',
    templateUrl: 'list.component.html'
})
export class ListComponent implements OnInit {

    @Input('init') list: Article[] = [];

    constructor() { }

    ngOnInit() {

    }
}