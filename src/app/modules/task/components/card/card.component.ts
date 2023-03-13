import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{
  //@ViewChild('refId') elementRefId:ElementRef = new ElementRef('hola')
  @Input() idOrder: string | number = 0
  @Input() items: Array<any> = []

  constructor() { }
  ngOnInit(): void {

  }


  sendData():void{
   // this.testCourseService.setData('Hola desde card 😉')
  }
}
