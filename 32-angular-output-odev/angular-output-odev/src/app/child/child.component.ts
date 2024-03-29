import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  @Output() newItemEvent = new EventEmitter<string>();
  constructor() {}

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }

  ngOnInit(): void {}
}
