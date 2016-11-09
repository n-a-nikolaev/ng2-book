import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'add-form',
    templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {

    private hasError: boolean;

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
        if (this.isEmptyString(title) || this.isEmptyString(link)) {
            this.hasError = true;
            return false; 
        }
    }

    
    
    /**
     * @description
     * Check if string is empty;
     * ----------------------------------------------------------
     * @param  {string} str
     * @returns boolean
     */
    private isEmptyString(str: string):boolean {
        return str !== '';
    }
}