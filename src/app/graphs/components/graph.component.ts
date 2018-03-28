import { Component, OnInit } from '@angular/core';
import { single, standdata, datausage, tableData } from '../../data';
import { TopNavBarComponent } from '../../topnavbar/topnavbar.component';
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
    // The Constructor
    constructor() {
        this.single = single;
        this.standdata = standdata;
        this.datausage = datausage;
        this.tableData = tableData;
    }

    // On initalisation
    ngOnInit() {
        this.showXAxis = true;
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
        this.view = [700, 400];
    }
}
