import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskRoutingModule } from './task-routing.module';
import { TaskPageComponent } from './page/task-page/task-page.component';
import { SharedModule } from '@shared/shared.module';
import { CardComponent } from './components/card/card.component';
import { ColumnComponent } from './components/column/column.component';
import { HeaderComponent } from './components/header/header.component';
import { NewTaskComponent } from './components/new-task/new-task.component';


@NgModule({
  declarations: [
    TaskPageComponent,
    CardComponent,
    ColumnComponent,
    HeaderComponent,
    NewTaskComponent
  ],
  imports: [
    CommonModule,
    TaskRoutingModule,
    SharedModule
  ]
})
export class TaskModule { }
