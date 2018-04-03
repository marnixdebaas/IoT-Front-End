import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../../services/appservice.service';
import { User } from '../../users/classes/user.class';

@Component({
  selector: 'app-login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

    public username: string;
    public password: string;
    public user: User;

    //
    constructor(private route: Router, private apiService: AppService) {
        //
    }

    ngOnInit() {
        this.username = '';
        this.password = '';
        //this.apiService.getUsers();
        this.apiService.getUser().subscribe((data: any) => {
            // Formatting weird timestamp date to normal angular date
            this.user.username = data.Name;
            this.user.password = data.Password;
        });
    }

    loginClicked($event) {
        const user = document.getElementById('user');
        const pass = document.getElementById('pass');
        if( this.user.username == this.username && this.user.password === this.password ) {
            this.route.navigate(['graphs']);
        } else if (this.user.username === this.username) {
            pass.style.color = 'red';
        } else if (this.user.password === this.password) {
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
