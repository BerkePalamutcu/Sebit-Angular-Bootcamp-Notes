import { NumberFormatStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.css']
})
export class InputsComponent implements OnInit {
  celsius: number = 0
  fahreneit: NumberFormatStyle = 0
  constructor() { }

  ngOnInit(): void {
  }

}
