import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../user.class';
import { SensorData } from '../sensordata/classes/sensordata.class';
import 'rxjs/add/operator/map';

@Injectable()
export class AppService {
    public user: User;
    public headers: any;
    public apiUrl: string = '37.97.180.203:1833';

    //
    constructor(private http: HttpClient) {
        Object.assign(this);
    }

    public getUsers() {
        let users: User[] = [];
        this.http.get('http://' + this.apiUrl + '/sensor/getUsers').subscribe((data: any) => {
            debugger;
            users = data;
            return users;
        });
    }

    public getAllSensorData(): Observable<SensorData[]> {
        let sensorData: SensorData[] = [];
        /*this.http.get('http://' + this.apiUrl + '/sensor/getAllSensorData').subscribe((data: any) => {
            debugger;
            sensorData = data;
            return sensorData;
        })*/

        return this.http.get('http://' + this.apiUrl + '/sensor/getAllSensorData').map((res: SensorData[]) => res);
    }
}
