import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { single, standdata, datausage, tableData } from '../../data';
import { TopNavBarComponent } from '../../topnavbar/topnavbar.component';
import { AppService } from '../../services/appservice.service';
import { SensorData } from '../../sensordata/classes/sensordata.class';
import { User } from '../../user.class';
import { Data } from '../../data.interface';
import {forEach} from '@angular/router/src/utils/collection';
import moment = require('moment');

@Component({
  selector: 'app-graph-component',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})

export class GraphComponent implements OnInit {

    // The options for the graphs
    public admin: boolean;
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
    public graphDataAll: SensorData[];
    public kWhAll: number;
    public kWhDates:number;
    public isVisible: boolean;
    public isVisibleAll: boolean;
    public loading: boolean;
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
            domain: ['#E91E63', '#A10A28', '#C7B42C', '#AAAAAA']
        };
        this.view = [650 , 450];
        this.graphData = [];
        this.graphDataAll = [];
        this.isVisibleAll = false;


        const firstDate = new Date('2018-03-29 11:57:52.374');
        const lastDate = new Date();
        var dateDifference: number = Date.parse(lastDate.toDateString()) - Date.parse(firstDate.toString());
        let diffInHours: number = dateDifference / 1000 / 60 / 60;
        this.apiService.getBetweenDates(firstDate, lastDate, diffInHours).subscribe((data: any) => {
          // Formatting weird timestamp date to normal angular date
          this.graphDataAll = data.response;
          for (var d = 0; d < this.graphDataAll[0].series.length; d ++) {
            this.graphDataAll[0].series[d].name = moment(this.graphDataAll[0].series[d].name).format('MM/DD/YYYY H:mm');
          }
          this.cdr.detectChanges();
          this.kWhAll = this.graphDataAll[0].series[4].value;
          this.isVisibleAll = true;
        });
    }

    sendRequest($event) {
        this.loading = true;
        var fromDate: string = this.fromDate.toString();
        var toDate: string = this.toDate.toString();
        var dateDifference: number = Date.parse(toDate) - Date.parse(fromDate);
        let diffInHours: number = dateDifference / 1000 / 60 / 60;
        console.log(diffInHours);

        if(diffInHours < 0) {
            return;
        } else {
            this.apiService.getBetweenDates(new Date(this.fromDate), new Date(this.toDate), diffInHours).subscribe((data: any) => {
                // Formatting weird timestamp date to normal angular date
                this.graphData = data.response
                for (var d = 0; d < this.graphData[0].series.length; d ++) {
                    this.graphData[0].series[d].name = moment(this.graphData[0].series[d].name).format('MM/DD/YYYY H:mm');
                }
                this.cdr.detectChanges();
                this.kWhDates = this.graphData[0].series[4].value;
                this.loading = false;
                this.isVisible = true;
            });
        }
    }
}
