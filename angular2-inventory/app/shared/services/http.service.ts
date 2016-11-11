import { Injectable } from '@angular/core';
import {
    Response,
    RequestOptions,
    RequestMethod,
    RequestOptionsArgs,
    URLSearchParams,
    Headers,
    Http
} from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class HttpService {

    private url: string = 'http://localhost/inventory/';

    constructor(private http: Http) { }


    // get(url: string, options?: RequestOptionsArgs) : Observable<Response>
    public get(url: string, options?: Object): Observable<any> {

        let deafaults: RequestOptionsArgs = this.generateRequestOptionsArgs();

        if (options) {
            let params: URLSearchParams = new URLSearchParams();
            Object.keys(options).forEach(key => {
                params.set(key, options[key]);
            });
            deafaults.search = params;
        }


        return this.http.get(this.url + url, options).map((res: Response) => res.json());
    }


    // post(url: string, body: any, options?: RequestOptionsArgs) : Observable<Response>
    public post(url: string, data: any) { }


    // put(url: string, body: any, options?: RequestOptionsArgs): Observable<Response>
    public put(url: string, data: any) { }


    // delete(url: string, options?: RequestOptionsArgs): Observable<Response>
    public delete(url: string, data: any) { }


    // interface RequestOptionsArgs {
    //     url: string
    //     method: string | RequestMethod
    //     search: string | URLSearchParams
    //     headers: Headers
    //     body: any
    //     withCredentials: boolean
    //     responseType: ResponseContentType
    // }
    private generateRequestOptionsArgs(): RequestOptionsArgs {
        let options: RequestOptionsArgs = {};

        options.headers = new Headers({
            'Content-Type': 'application/json'
        });

        return options;
    }

    private extendObject(...objects: Object[]): Object {
        let target = {};

        if (objects.length == 1) {
            return objects[0];
        }
        objects.forEach((obj: Object) => {
            Object.assign(target, obj);
        });

        return target;
    }
}