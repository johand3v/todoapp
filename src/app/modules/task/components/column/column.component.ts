import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.css']
})
export class ColumnComponent implements OnInit{
  @Input() data:Array<any> = [];
  @Input() name:string = '';
  // @Input() id:string = '';

  constructor() { }

  ngOnInit(): void {
   for(let i of this.data) {
    // alert(i.items[0].key)
   }
  }

  addTask():void{

  }

}
