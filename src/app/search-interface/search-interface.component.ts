import { Component } from '@angular/core';
import { EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'app-search-interface',
  templateUrl: './search-interface.component.html',
  styleUrls: ['./search-interface.component.css']
})
export class SearchInterfaceComponent {
  @Output() closeSearchInterface = new EventEmitter();
  @Output() searchPerformed = new EventEmitter<string>();

  searchTerm: string = '';

  performSearch() {
    this.searchPerformed.emit(this.searchTerm);
  }

  closeInterface() {
    this.closeSearchInterface.emit();
  }
}
