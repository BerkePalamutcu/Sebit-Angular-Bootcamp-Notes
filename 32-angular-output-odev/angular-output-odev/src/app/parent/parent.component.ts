import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  items = ['bilgisayar', 'telefon', 'canta', 'kulaklik'];

  constructor() {}
  addItem(newItem: string) {
    this.items.push(newItem);
  }
  ngOnInit(): void {}
}
