import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    //
    constructor(private route: Router) {
        localStorage.setItem('username', 'Marnix');
        localStorage.setItem('password', 'Superadmin');
        this.route.navigate(['login']);
    }

    ngOnInit() {
    }

}
