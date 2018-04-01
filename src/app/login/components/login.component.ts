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
      const user = document.getElementById('user');
      const pass = document.getElementById('pass');

      const password = localStorage.getItem('password').toString();
        const username = localStorage.getItem('username').toString();
        if ( username === this.username && password === this.password ) {
            this.route.navigate(['graphs']);
        } else if (username === this.username) {
          pass.style.color = 'red';
        } else if (password === this.password) {
          user.style.color = 'red';
        } else {
          user.style.color = 'red';
          pass.style.color = 'red';
        }
    }

    changeUserInput() {
      const user = document.getElementById('user');
      user.style.color = 'white';
    }
    changePassInput() {
      const pass = document.getElementById('pass');
      pass.style.color = 'white';
    }

}
