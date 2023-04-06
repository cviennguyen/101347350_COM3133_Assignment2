import { Component } from '@angular/core';
import { Apollo } from 'apollo-angular';
import {SIGN_UP} from '../graphql.operations'
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  username: string = '';
  email: string = '';
  password: string = '';
  confirm_password: string = '';
  error: string = '';
  constructor(private apollo:Apollo, private router:Router) { }
  ngOnInit(): void {}
  signup(username:string, email: string, password: string){
    if(password != this.confirm_password){
      this.error = 'Password does not match'
      return;
    } else {
      this.error = ''
      this.apollo.mutate({
        mutation: SIGN_UP,
        variables: {
          username,
          email,
          password
        },
      }).subscribe(() => {
        console.log('Employee created')
        this.router.navigate(['/login'])
      })
    }
    
  }
}
