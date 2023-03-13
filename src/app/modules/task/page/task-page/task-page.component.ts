import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-page',
  templateUrl: './task-page.component.html',
  styleUrls: ['./task-page.component.css']
})
export class TaskPageComponent implements OnInit {


//case:number = 850;

groups:Array<any> = [];

constructor(){}

ngOnInit(): void {

  this.groups = [
    {
      label:'Nuevos',
      color:'tomato',
      list:[
        {
          order:'Como instalar Angular',
          items: [
            {
              key:'price',
              value: 152
            },
            {
              key:'time',
              value: 152
            },
            {
              key:'author',
              value: {
                name:'Goku',
                avatar:'https://avatars.githubusercontent.com/u/15802366?v=4'
              }
            },
          ]
        }
      ]
    },
    {
      label:'Trabajando',
      color:'tomato',
      list:[
        {
          order:'Como instalar Angular',
          items: [
            {
              key:'price',
              value: 152
            },
            {
              key:'time',
              value: 152
            },
            {
              key:'author',
              value: {
                name:'Goku',
                avatar:'https://avatars.githubusercontent.com/u/15802366?v=4'
              }
            },
          ]
        }
      ]
    }

  ]

}

}
