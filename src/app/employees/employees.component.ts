import { Component, OnInit } from '@angular/core';
import { Emp } from "../emp";
import { EmployeeService } from "../employee.service";

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employeelist:Emp[];
  constructor( private employeeService: EmployeeService){ }

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

    
  }
