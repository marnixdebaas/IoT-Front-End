import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../../services/appservice.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

    public username: string;
    public password: string;

    //
    constructor(private route: Router, private apiService: AppService) {
        //
    }

    ngOnInit() {
        this.username = '';
        this.password = '';
        this.apiService.getUsers();
    }

    loginClicked($event) {
        const password = localStorage.getItem('password').toString();
        const username = localStorage.getItem('username').toString();
        if ( username === this.username && password === this.password ) {
            this.route.navigate(['graphs']);
        } else {
            console.log('error');
        }
    }

}
