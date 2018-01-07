import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PersonService } from './person.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    persons: any;

    constructor(private http: HttpClient, private personService: PersonService) {
    }

    ngOnInit() {
        this.personService.queryPersonList().subscribe(
            (data) => {
                this.persons = data;
            },
            (err) => {
                console.log(err.message);
            });
    }
}
