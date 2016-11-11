import { Component } from '@angular/core';

@Component({
    selector: 'inventory-app',
    template: `<navigation></navigation>
    <div class="ui divider"></div>
    <router-outlet></router-outlet>`
})
export class AppComponent { }
