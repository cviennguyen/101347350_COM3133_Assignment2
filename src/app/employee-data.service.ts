import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDataService {
  private apiUrl = 'http://localhost:4000/graphql';

  constructor(private http: HttpClient) {}

  createEmployee(firstName: string, lastName: string,email: string, gender: string, salary: number): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    const query = `mutation {
      createEmployee(input: { firstName: "${firstName}", lastName: "${lastName}",email: "${email},gender:"${gender}, salary: ${salary} }) {
        id
        firstName
        lastName
        email
        gender
        salary
      }
    }`;

    return this.http.post<any>(this.apiUrl, { query }, httpOptions)
      .pipe(
        map(response => response.data.createEmployee)
      );
  }
}
