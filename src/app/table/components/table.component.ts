import { Component, OnInit } from '@angular/core';
import { single, standdata, datausage, tableData } from '../../data';
import { Data } from '../../data.interface';
import { SensorData } from '../../sensordata/classes/sensordata.class';
import { AppService } from '../../services/appservice.service';

@Component({
  selector: 'app-table-component',
  templateUrl: './table.component.html',
  // styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

    public displayedColumns = ['time', 'data'];
    // line, area
    public autoScale = true;
    public dataSource: SensorData[];

    //
    constructor(private apiService: AppService) {
        Object.assign(this, {single, standdata, datausage, tableData});
    }

    ngOnInit() {
        //
        this.dataSource = [];
        debugger;
        this.apiService.getAllSensorData().subscribe((data: any) => {
            debugger;
            this.dataSource = data.response;
        });
    }

}
