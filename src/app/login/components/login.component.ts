import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../../services/appservice.service';
import { User } from '../../users/classes/user.class';
import { LocalStorageService, SessionStorageService, LocalStorage, SessionStorage } from 'angular-web-storage';


@Component({
  selector: 'app-login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
    public username: string;
    public password: string;
    public user: User;

    public userToggle: boolean;
    public newUsername: string;
    public newPassword: string;
    public checkPassword: string;

    public admin: boolean;

    //
    constructor(private route: Router, private apiService: AppService, public local: LocalStorageService, public session: SessionStorageService) {
        //
    }

    sessionKey = 'value';

    ngOnInit() {
        this.user = new User();
        this.username = '';
        this.password = '';
        this.userToggle = false;

        this.sessionLoad();
    }

    sessionSave(expired: number = 0)
    {
      this.session.set(this.sessionKey, { name: this.username, pwd: this.password }, expired, 's');
    }

    sessionLoad()
    {
      this.username = JSON.stringify(this.session.get(this.sessionKey));
      //this.username = JSON.stringify(this.username);//
    }

    loginClicked($event) {
        const user = document.getElementById('user');
        const pass = document.getElementById('pass');
        this.apiService.getUser(this.username, this.password).subscribe((data: any)  => {
            if(data.response.role === 'admin') {
                this.admin = true;
                this.route.navigate(['graphs']);
                //this.sessionSave();
            }
            else if(data.response.role === 'user'){
                this.admin = false;
                this.route.navigate(['graphs']);
                //this.sessionSave();
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
