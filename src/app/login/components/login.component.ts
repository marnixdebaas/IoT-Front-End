import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../../services/appservice.service';
import { User } from '../../users/classes/user.class';
import { SessionStorageService } from 'angular-web-storage';


@Component({
  selector: 'app-login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
    public username: string;
    public password: string;
    public user: User;
    public userSession;

    public userToggle: boolean;
    public newUsername: string;
    public newPassword: string;
    public checkPassword: string;

    public admin: boolean;

    //
    constructor(private route: Router, private apiService: AppService, public session: SessionStorageService) {
        //
    }

    ngOnInit() {
        this.user = new User();
        this.username = '';
        this.password = '';
        this.userToggle = false;

        this.sessionLoad();
    }

    //session data never expires if value is 0
    sessionSave(expired: number = 0)
    {
      this.session.set(this.userSession, { username: this.username, password: this.password }, expired, 's');
    }

    sessionLoad()
    {
      //get data from session and check if data is not null
      var jUser = this.session.get(this.userSession);
      if (jUser != null)
      {
        this.username = jUser.username;
        this.password = jUser.password;

        this.apiService.getUser(this.username, this.password).subscribe((data: any)  =>
        {
          if(data.response.role === 'admin')
          {
            this.admin = true;
            this.route.navigate(['graphs']);
          }
          else if(data.response.role === 'user')
          {
            this.admin = false;
            this.route.navigate(['graphs']);
          }
        });
      }
    }

    loginClicked($event) {
        const user = document.getElementById('user');
        const pass = document.getElementById('pass');
        this.apiService.getUser(this.username, this.password).subscribe((data: any)  => {
            if(data.response.role === 'admin') {
                this.admin = true;
                this.route.navigate(['graphs']);
                this.sessionSave();
            }
            else if(data.response.role === 'user'){
                this.admin = false;
                this.route.navigate(['graphs']);
                this.sessionSave();
            }else{
                user.style.color = 'red';
                pass.style.color = 'red';
            }
        });
    }

    changeUserInput() {
      const user = document.getElementById('user');
      user.style.color = 'white';
    }
    changePassInput() {
      const pass = document.getElementById('pass');
      pass.style.color = 'white';
    }
    toggleNewUser() {
      this.userToggle = true;
    }
    addUser($event) {
        console.log('test')
        console.log(this.newPassword)
        if (this.newPassword === this.checkPassword) {
            this.apiService.newUser(this.newUsername, this.newPassword).subscribe((data:any) => {
                console.log(data.response.saved)
                if(data.response.saved == 'successfully'){
                    this.userToggle = false;
                }
            })
        } else {
            event.preventDefault();
            const newPass = document.getElementById('newPass');
            const checkPass = document.getElementById('checkPass');
            newPass.style.color = 'red';
            checkPass.style.color = 'red';
        }
    }

}
