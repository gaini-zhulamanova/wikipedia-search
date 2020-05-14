import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  // create an instance of the EventEmitter
  @Output() submitted = new EventEmitter<string>();

  term = '';

  constructor() { }

  ngOnInit(): void {
  }

  onFormSubmit(event: any) {
    // prevent default browser behavior: tries to send the value at once to the backend
    event.preventDefault();
    // send the term to the parent component
    this.submitted.emit(this.term);
  }

}
