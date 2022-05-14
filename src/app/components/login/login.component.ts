import { Component } from '@angular/core';
import { Router } from '@angular/router'
import { Login } from "./login";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {

    login = new Login()
    users: any[] = [
        {username: "Milind", password: "pass"}
    ];
    isAuthenticated!: boolean;
    submitted = false;
    
    constructor(
        public router: Router
        ){ }

    onSubmit() {
        this.submitted = true;
        
        const username = this.login.username;
        const password = this.login.password;

        const user = this.users.filter(item => item.username === username && item.password === password);

        if (user) {
            this.isAuthenticated = true;
            this.router.navigate(['../book-ride'])
        } else {
            this.isAuthenticated = false;
        }
        
    }
}
