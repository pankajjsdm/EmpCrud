import { Component, OnInit } from '@angular/core';
import { Emp } from "../emp";

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  emp:Emp={
    id:101,
    name:"Pankaj",
    salary:1092,
  }

  constructor() { }

  ngOnInit() {
    
    }
  }
