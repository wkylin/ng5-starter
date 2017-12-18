import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

interface UserResponse {
    login: string;
    bio: string;
    company: string;
}

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    userInfo: UserResponse;

    constructor(private http: HttpClient) {
    }

    ngOnInit() {
        this.http.get<UserResponse>('https://api.github.com/users/wkylin').subscribe(
            data => {
                this.userInfo = data;
                console.log('login: ' + data.login);
                console.log('bio: ' + data.bio);
                console.log('company: ' + data.company);
            },
            (err: HttpErrorResponse) => {
                if (err.error instanceof Error) {
                    console.log('Client-side Error occured');
                } else {
                    console.log('Server-side Error occured');
                }
            }
        );

        this.http.post('https://jsonplaceholder.typicode.com/posts', {
            title: 'foo',
            body: 'bar',
            userId: 1
        }).subscribe(
            res => {
                console.log(res);
            },
            err => {
                console.log('Error occured');
            }
        );
    }

}
