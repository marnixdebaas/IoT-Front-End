import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { User } from '../user.class';
import 'rxjs/add/observable/of';

@Injectable()
export class AppService {
    public user: User;

    //
    constructor(private http: HttpClient) {
        Object.assign(this);
    }

    public getUsers() {
        this.user = new User();
        this.http.get('http://37.97.180.203:1833/sensor/getUsers').subscribe((data: any) => {
            debugger;
            console.log(data);
            data.results;
            console.log(this.user);
        });
    }
}
