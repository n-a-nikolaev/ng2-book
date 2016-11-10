import { Component, Output, EventEmitter, OnInit } from '@angular/core';

import { Article } from './article.interface';

@Component({
    moduleId: module.id,
    selector: 'add-form',
    templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {

    private hasError: boolean;

    @Output('articleAdd') addition: EventEmitter<Article> = new EventEmitter<Article>();

    constructor() {
    }

    ngOnInit() {

    }
    /**
     * @description
     * Collect data from article form and output new article
     * If some of inputs is empty, show error message
     * ----------------------------------------------------------
     * @param  {HTMLInputElement} title
     * @param  {HTMLInputElement} link
     */
    public addArticle(title: HTMLInputElement, link: HTMLInputElement) {
        if (this.isEmptyString(title.value) || this.isEmptyString(link.value)) {
            this.hasError = true;
            return; 
        }
        if (this.hasError) {
            this.hasError = !this.hasError;
        }
        this.addition.emit({ id: new Date().getTime(), title: title.value, link: link.value, votes: 0 });

        title.value = '';
        link.value = '';
    }

    
    
    /**
     * @description
     * Check if string is empty;
     * ----------------------------------------------------------
     * @param  {string} str
     * @returns boolean
     */
    private isEmptyString(str: string):boolean {
        return str === '';
    }
}