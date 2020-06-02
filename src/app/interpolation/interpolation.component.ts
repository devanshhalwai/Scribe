import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {

  string1 : string = "Interpolation";
  string2 : string = "Example";
  constructor() { }

  ngOnInit(): void {
    
  }

}
