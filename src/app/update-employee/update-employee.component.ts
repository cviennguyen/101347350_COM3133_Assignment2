import { Component } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { UPDATE_EMPLOYEE, GET_EMPLOYEE } from '../graphql.operations';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent {
  employee: any
  id: any;
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  gender: string = '';
  salary: string = '';
  constructor(private apollo: Apollo, private route:ActivatedRoute, private router:Router) { }
  ngOnInit(): void {  
    this.id = this.route.snapshot.paramMap.get('id');
    this.get_employee(this.id);
  }
  updateEmployee(id:string, firstName: string, lastName: string, email: string, gender: string, salary: string){
    this.apollo.mutate({
      mutation: UPDATE_EMPLOYEE,
      variables: {
        id,
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
  get_employee(id: string){
    this.apollo.watchQuery({
      query: GET_EMPLOYEE,
      variables: {
        id
      },
    }).valueChanges.subscribe(({data}:any) => {
      this.employee = data?.getEmployee
      this.firstName = this.employee.firstName;
      this.lastName = this.employee.lastName;
      this.email = this.employee.email;
      this.gender = this.employee.gender
      this.salary = this.employee.salary
    });
  }
}
