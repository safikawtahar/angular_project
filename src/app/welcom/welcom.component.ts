import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-welcom',
  templateUrl: './welcom.component.html',
  styleUrls: ['./welcom.component.css']
})
export class WelcomComponent implements OnInit {
  employees: any;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getEmployeesData();
  }

  getEmployeesData() {
    this.dataService.getData().subscribe(res => {
      this.employees = res; // Assigner la réponse à la variable employees
      console.log(this.employees); // Afficher les employés dans la console
    });
  }
}
