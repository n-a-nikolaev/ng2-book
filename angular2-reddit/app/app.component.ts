import { Component } from '@angular/core';

import { Article } from './article.interface';
import { ArticleService } from './article.service';

@Component({
    selector: 'reddit',
    template: `<add-form (articleAdd)="onArticleAdd($event)"></add-form>
    <div class="ui inverted divider"></div>
    <article-list [init]="list"></article-list>`
})
export class AppComponent {
    public list: Article[] = this.articleService.getAll(); 

    constructor(private articleService: ArticleService){
    }

    public onArticleAdd($event:Article) {
        this.list = this.articleService.add($event);
    }
 }