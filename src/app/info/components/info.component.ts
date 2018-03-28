import { Component, OnInit } from '@angular/core';
import { User } from '../../user.class';
import { AppService } from '../../services/appservice.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-info-component',
  templateUrl: './info.component.html',
  // styleUrls: ['./info.component.css']
})

export class InfoComponent implements OnInit {

    public user: User;

    // The Constructor
    constructor(private apiService: AppService, private http: HttpClient) {
        //
    }

    // On initalisation
    ngOnInit() {
        this.user = new User();
        this.apiService.getUsers();
        this.http.get('https://randomuser.me/api/').subscribe((data: any) => {
            console.log(data);
            data.results;
            this.user.name = data.results[0].name.first + ' ' + data.results[0].name.last;
            this.user.gender = data.results[0].gender;
            this.user.phone = data.results[0].phone;
            this.user.city = data.results[0].location.city;
            console.log(this.user);
        });
    }
}
