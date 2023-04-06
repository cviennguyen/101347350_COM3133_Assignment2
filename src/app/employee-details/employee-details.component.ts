import { Component } from '@angular/core';
import { Apollo} from 'apollo-angular';
import {GET_EMPLOYEE} from '../graphql.operations'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent {
  employee: any
  id: any;
  constructor(private apollo: Apollo, private route:ActivatedRoute) { }
  ngOnInit(): void {  
    this.id = this.route.snapshot.paramMap.get('id');
    this.get_employee(this.id);
  }
   

  get_employee(id: string){
    this.apollo.watchQuery({
      query: GET_EMPLOYEE,
      variables: {
        id
      },
    }).valueChanges.subscribe(({data}:any) => {
      this.employee = data.getEmployee;
    });
  }
  
}
