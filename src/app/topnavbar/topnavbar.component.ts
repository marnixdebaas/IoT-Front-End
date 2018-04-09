import { Component, Inject, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent} from '../login/components/login.component';

@Component({
    selector: 'app-top-nav-bar',
    moduleId: module.id,
    templateUrl: 'topnavbar.component.html',
    styleUrls: ['topnavbar.component.css'],
})

export class TopNavBarComponent implements OnInit {

    @Input()
    public active: number;

    public hideTop: boolean = false;
    public graphsActive: boolean = false;
    public tableActive: boolean = false;
    public infoActive: boolean = false;

    // public layoutCore: LayoutCore;

    /**
     * Constructor
     * @param {CoreService} private core [description]
     */
    constructor(private route: Router) {
        //
    }

    ngOnInit() {
        if(this.active === 1) {
            this.graphsActive = true;
            this.tableActive = false;
            this.infoActive = false;
        } else if (this.active === 2) {
            this.tableActive = true;
            this.graphsActive = false;
            this.infoActive = false;
        } else if (this.active === 3) {
            this.infoActive = true;
            this.tableActive = false;
            this.graphsActive = false;
        }
    }

    toggleSidebar() {
        //
    }

    graphsClick($event) {
        this.route.navigate(['graphs']);
    }

    tableClick($event) {
        this.route.navigate(['table']);
    }

    infoClick($event) {
        this.route.navigate(['info']    );
    }
}
