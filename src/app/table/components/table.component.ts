import { Component, OnInit } from '@angular/core';
import { single, standdata, datausage, tableData } from '../../data';
import { Data } from '../../data.interface';
import { AppService } from '../../services/appservice.service';
import {SessionStorageService} from 'angular-web-storage';
import {Router} from '@angular/router';
import { Log } from '../../log/classes/log.class';

@Component({
  selector: 'app-table-component',
  templateUrl: './table.component.html',
  // styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

    public displayedColumns = ['time', 'data'];
    // line, area
    public autoScale = true;
    public dataSource: Log[];
    public userSession: any;

    //
    constructor(private route: Router, private apiService: AppService, public session: SessionStorageService) {
        Object.assign(this, {single, standdata, datausage, tableData});
    }

    ngOnInit() {
        var jUser = this.session.get(this.userSession)
        if(jUser.username !== 'superadmin')
            this.route.navigate(['/login'])

        this.dataSource = [];
        this.apiService.getLogs().subscribe((data: any) => {
            // Formatting weird timestamp date to normal angular date
            this.dataSource = data.response;
            this.dataSource = this.dataSource.reverse()
            let i: number;
            for(i = 0 ; i < this.dataSource.length; i++ ) {
                this.dataSource[i].timestamp = new Date(this.dataSource[i].timestamp)
            }
        });
        console.log(this.dataSource)
    }

}
