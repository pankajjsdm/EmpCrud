import { Component, OnInit } from '@angular/core';
import { Emp } from "../emp";
import { EmployeeService } from "../employee.service";
import { IfObservable } from 'rxjs/observable/IfObservable';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employeelist:Emp[];
  constructor( private employeeService: EmployeeService){ }
employee:Emp;
  loadEmployee(){
   
    //Get all Employee
    this.employeeService.getEmployeeAsync()
                       .subscribe(
                        employeelist => this.employeelist = employeelist, //Bind to view
                            err => {
                                // Log errors if any
                                console.log(err);
                            });
}
  ngOnInit() {
    this.loadEmployee()
    }

   InsertEmployee(empid:number,name:string,salary:number){
  this.employee={id:empid,name:name,salary:salary}
  this.employeeService.InsertEmployee(this.employee).subscribe(data=>{
    this.loadEmployee();
  },
  err => {
    // Log errors if any
    console.log(err);
});
   }

   UpdateEmployee(){
   
  } 

  DeleteEmployee(){
    
  } 
  }
