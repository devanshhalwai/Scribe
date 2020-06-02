import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-listform',
  templateUrl: './listform.component.html',
  styleUrls: ['./listform.component.css']
})
export class ListformComponent implements OnInit {

  @NgModule({
    imports: [
      FormsModule,
      ReactiveFormsModule
    ], 
    declarations: []
    }
  )
  name: string = '';
  age : number;
  title = 'Scribe';

  people: any [] = [];

  constructor()
  {
    this.people.push({
      "name":"Devansh",
      "age":21
    });
    this.people.push({
      "name":"Devanshi",
      "age":15
    });
  }

  add()
  {
    if(this.name == "devansh")
    this.people.push(
      {
        "name":this.name,
        "age":this.age
      }
    );
    this.name='';
    this.age=undefined;
  }

  clear()
  {
    this.people.pop();
  }
  ngOnInit(): void {
  }

}
