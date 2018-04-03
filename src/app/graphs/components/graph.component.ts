import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { single, standdata, datausage, tableData } from '../../data';
import { TopNavBarComponent } from '../../topnavbar/topnavbar.component';
import { AppService } from '../../services/appservice.service';
import { SensorData } from '../../sensordata/classes/sensordata.class';
import { User } from '../../user.class';
import { Data } from '../../data.interface';

@Component({
  selector: 'app-graph-component',
  templateUrl: './graph.component.html',
  // styleUrls: ['./app.component.css']
})

export class GraphComponent implements OnInit {

    // The options for the graphs
    public single: any[];
    public standdata: any[];
    public datausage: any[];
    public tableData: Data[];
    public view: any[];
    public showXAxis: boolean;
    public showYAxis: boolean;
    public gradient: boolean;
    public showLegend: boolean;
    public showXAxisLabel: boolean;
    public xAxisLabel: string;
    public showYAxisLabel: boolean;
    public yAxisLabel: string;
    public colorScheme: any;
    public fromDate: Date;
    public toDate: Date;
    public graphData: SensorData[];
    public isVisible: boolean;
    // The Constructor
    constructor(public apiService: AppService, private cdr: ChangeDetectorRef) {
        this.single = single;
        this.standdata = standdata;
        this.datausage = datausage;
        this.tableData = tableData;
    }

    // On initalisation
    ngOnInit() {
        this.showXAxis = true;
        this.isVisible = false;
        this.showYAxis = true;
        this.gradient = false;
        this.showLegend = true;
        this.showXAxisLabel = true;
        this.xAxisLabel = 'Tijd';
        this.showYAxisLabel = true;
        this.yAxisLabel = 'kWh';
        this.colorScheme = {
            domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
        };
        this.view = [1400, 400];
        this.graphData = [];
    }

    sendRequest($event) {
        debugger;
        var fromDate: string = this.fromDate.toString();
        var toDate: string = this.toDate.toString();
        var dateDifference: number = Date.parse(toDate) - Date.parse(fromDate);
        let diffInHours: number = dateDifference / 1000 / 60 / 60;
        console.log(diffInHours);

        if(diffInHours < 0) {
            return;
        } else {
            this.apiService.getBetweenDates(this.fromDate, this.toDate, diffInHours).subscribe((data: any) => {
                // Formatting weird timestamp date to normal angular date
                debugger;
                this.graphData = data.response;
                this.cdr.detectChanges();
                this.isVisible = true;
            });
        }
    }
}
