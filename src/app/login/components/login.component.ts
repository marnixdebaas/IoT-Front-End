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

    public userToggle: boolean;
    public newUsername: string;
    public newPassword: string;
    public checkPassword: string;

    public admin: boolean;

    //
    constructor(private route: Router, private apiService: AppService) {
        //
    }

    ngOnInit() {
        this.user = new User();
        this.username = '';
        this.password = '';
        this.userToggle = false;

    }

    loginClicked($event) {
        const user = document.getElementById('user');
        const pass = document.getElementById('pass');
        this.apiService.getUser(this.username, this.password).subscribe((data: any)  => {
            if(data.response.role === 'admin') {
                this.admin
                this.route.navigate(['graphs']);
            }
            else if(data.response.role === 'user'){
                this.admin = false;
                this.route.navigate(['graphs']);
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
        if (this.newPassword === this.checkPassword) {
            this.apiService.newUser(this.newUsername, this.newPassword).subscribe((data:any) => {
                console.log(data.response.saved)
                if(data.response.saved == 'successfully'){
                    this.userToggle = false;
                }else if(data.response.saved == 'unsuccessfully'){
                    alert('Username already exists');
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
