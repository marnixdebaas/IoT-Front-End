import { Component, OnInit } from '@angular/core';
import { single, standdata, datausage, tableData } from '../../data';
import { Data } from '../../data.interface';

@Component({
  selector: 'app-table-component',
  templateUrl: './table.component.html',
  // styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

    public displayedColumns = ['name', 'value'];
    // line, area
    public autoScale = true;

    //
    constructor() {
        Object.assign(this, {single, standdata, datausage, tableData});
    }

    ngOnInit() {
        //
    }

}
