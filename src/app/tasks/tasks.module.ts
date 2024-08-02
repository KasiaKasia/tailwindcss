import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksRoutingModule } from './tasks-routing.module';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TasksRoutingModule,
    ListComponent,
    AddComponent
  ]
})
export class TasksModule { }
