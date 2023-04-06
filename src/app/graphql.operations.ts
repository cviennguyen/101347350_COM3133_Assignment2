import {gql} from 'apollo-angular';


const GET_EMPLOYEES = gql`
    query {
    getAllEmployees {
      id
      firstName
      lastName
      email
      gender
      salary
    }
  }
  `

//CREATE EMPLOYEE
const CREATE_EMPLOYEE = gql`
  mutation createEmployee($firstName: String!, $lastName: String!, $email: String!, $gender: String, $salary: String!) {
    createEmployee(employee:{firstName: $firstName, lastName:$lastName, email: $email, gender: $gender, salary: $salary}){
      id
      firstName
      lastName
      email
      gender
      salary
    }
  }
`
const UPDATE_EMPLOYEE = gql`
  mutation updateEmployee($id: ID!, $firstName: String, $lastName: String, $email: String, $gender: String, $salary: String) {
    updateEmployee(id: $id, employee:{firstName: $firstName, lastName:$lastName, email: $email, gender: $gender, salary: $salary}){
      id
      firstName
      lastName
      email
      gender
      salary
    }
  }
`
const GET_EMPLOYEE = gql`
    query getEmployee($id: ID!) {
    getEmployee(id: $id) {
      id
      firstName
      lastName
      email
      gender
      salary
    }
  }
  `
const DELETE_EMPLOYEE = gql`
  mutation deleteEmployee($id: ID!) {
  deleteEmployee(id: $id)
}
`
const SIGN_UP = gql`
  mutation signUp($username:String!,$email: String!, $password: String!) {
    signup(user:{username: $username, email: $email, password: $password})
  }
`
const LOG_IN = gql`
  mutation logIn($username: String!, $password: String!) {
    login(username: $username, password: $password)
  }
`
export {GET_EMPLOYEES, CREATE_EMPLOYEE, UPDATE_EMPLOYEE, GET_EMPLOYEE, DELETE_EMPLOYEE, SIGN_UP, LOG_IN};