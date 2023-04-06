import { Component, OnInit } from '@angular/core';
import { Apollo} from 'apollo-angular';
import {GET_EMPLOYEES, DELETE_EMPLOYEE, CREATE_EMPLOYEE} from '../graphql.operations'



@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employees: any = [];
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  gender: string = '';
  salary: string = '';
  constructor(private apollo: Apollo) { }
  ngOnInit(): void {
    this.apollo.watchQuery({
      query: GET_EMPLOYEES,
    }).valueChanges.subscribe(({data}:any) => {
      this.employees = data.getAllEmployees;
    });
  }

  // signup(username:string, email: string, password: string){
  //   this.apollo.mutate({
  //     mutation: SIGN_UP,
  //     variables: {
  //       username,
  //       email,
  //       password
  //     },
  //   }).subscribe(() => {
  //     console.log('Employee created')
  //   })
  // }
 
  // createEmployee(firstName: string, lastName: string, email: string, gender: string, salary: string){
  //   this.apollo.mutate({
  //     mutation: CREATE_EMPLOYEE,
  //     refetchQueries: [{query: GET_EMPLOYEES}],
  //     variables: {
  //       firstName,
  //       lastName,
  //       email,
  //       gender,
  //       salary
  //     },
  //   }).subscribe(() => {
  //     console.log('Employee created')
  //   })
  // }

  
  delete(id: string){
    if(!confirm('Are you sure you want to delete this employee?')){
      return;
    } else {
      this.apollo.mutate({
        mutation: DELETE_EMPLOYEE,
        refetchQueries: [{query: GET_EMPLOYEES}],
        variables: {
          id
        },
      }).subscribe(() => {
        console.log('Employee deleted')
      })
    }
  }
  // login(username: string, password: string){
  //   this.apollo.mutate({
  //     mutation: LOG_IN,
  //     variables: {
  //       username,
  //       password
  //     },
  //   }).subscribe(() => {
  //     console.log('Logged in')
  //   })
  // }
  // get_employee(id: string){
  //   this.apollo.watchQuery({
  //     query: GET_EMPLOYEE,
  //     variables: {
  //       id
  //     },
  //   }).valueChanges.subscribe(({data}:any) => {
  //     console.log(data.getEmployee )
  //   });
  // }
}
