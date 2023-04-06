import { Component } from '@angular/core';
import { Apollo} from 'apollo-angular';
import {CREATE_EMPLOYEE} from '../graphql.operations'
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  gender: string = '';
  salary: string = '';
  constructor(private apollo: Apollo, private router: Router) { }
  ngOnInit(): void {
    
  }
  createEmployee(firstName: string, lastName: string, email: string, gender: string, salary: string){
    this.apollo.mutate({
      mutation: CREATE_EMPLOYEE,
      variables: {
        firstName,
        lastName,
        email,
        gender,
        salary
      },
    }).subscribe(() => {
      console.log('Employee created successfully')
      this.router.navigate(['/employees'])
    })
  }
}
