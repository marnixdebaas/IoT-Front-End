import { DataSource } from '@angular/cdk/collections';
import { Data } from '../data.interface';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

export class EDataSource extends DataSource<any> {

    constructor(private data: Data[]) {
        super();
    }

    connect(): Observable<Data[]> {
        return Observable.of(this.data);
    }


    disconnect() {}
}
