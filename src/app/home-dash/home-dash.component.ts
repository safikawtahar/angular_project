import { Component, EventEmitter, NgModule, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-dash',
  templateUrl: './home-dash.component.html',
  styleUrls: ['./home-dash.component.css']
})
export class HomeDashComponent implements OnInit {

  selectedOne: number = 1;
  @Output()
  searchBar: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }
  ngOnInit(): void {
  }
  activateClass(n:number) {
    this.selectedOne = n;
    this.searchBar.emit();
  }
}

@NgModule({
  declarations: [
    HomeDashComponent
  ],
  imports: [
    CommonModule // Assurez-vous que CommonModule est importé ici
  ],
  exports: [
    HomeDashComponent
  ]
})
export class HomeDashModule { }
