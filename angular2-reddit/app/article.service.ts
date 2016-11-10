import { Injectable } from '@angular/core';

import { Article } from './article.interface';

@Injectable()
export class ArticleService {
    
    private key:string = 'articles';
    private articleList:Article[] = [];

    constructor() { }


    /**
     * Get all saved articles from localStorage
     * 
     * @returns Array<Article>
     * 
     * @memberOf ArticleService
     */
    public getAll(){
        return JSON.parse(localStorage.getItem(this.key)) || [];
    }

    /**
     * Get Article By Id
     * 
     * @param {(string | number)} id - id of desired article
     * @returns {Article}
     * 
     * @memberOf ArticleService
     */
    public getById(id:number, arr?: Article[]): Article {
        let articles = arr ? arr : this.getAll();

        return articles.filter((article: Article) => {
            return +(article.id) === +(id); 
        })[0];
    }

    /**
     * Add article to localStorage and to list of articles
     * 
     * @param {Article} article
     * @returns Array<Article>
     * 
     * @memberOf ArticleService
     */
    public add(article: Article): Array<Article>{
        let arr = this.getAll();

        arr.push(article);
        localStorage.setItem(this.key, JSON.stringify(arr));

        return this.getAll();
    }


    public vote(id: number, upvote: boolean){
        let articles: Article[] = this.getAll();
        let article: Article = this.getById(id, articles);

        if (upvote) {
            article.votes++;
        } else {
            article.votes--;
        }

        let index = articles.indexOf(article);
        
        articles.splice(index, 1, article);
        localStorage.setItem(this.key, JSON.stringify(articles));

        return article;
    }
}