import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import {LOG_IN} from '../graphql.operations'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private apollo: Apollo, private router:Router) { }
  ngOnInit(): void { }
  username: string = '';
  password: string = '';
  isLogin: string = '';
    login(username: string, password: string){
    this.apollo.mutate({
      mutation: LOG_IN,
      variables: {
        username,
        password
      },
    }).subscribe({
      next: (data:any) => {

        if(data.data.login == "User not found" || data.data.login == "Invalid password") {
          this.isLogin = "Invalid username or password";
          alert(this.isLogin);
        } else {
          this.isLogin = "Login successfully";
          alert(this.isLogin);
          this.router.navigate(['/employees']);
        }
      }
    })
  }
}
