import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Article } from './article.interface';
import { ArticleService } from './article.service';

@Component({
    moduleId: module.id,
    selector: 'reddit-article',
    templateUrl: 'article.component.html',
    host: {
        class: 'row'
    }
})
export class ArticleComponent implements OnInit {

    @Input() article: Article;

    constructor(private articleService: ArticleService) { }

    ngOnInit() { 

    }

    vote(id: number, upvote: boolean) {
        this.article = this.articleService.vote(+(id), upvote);
        // this.articleService.vote(+(id), upvote);
    }

}