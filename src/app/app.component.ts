import { Component, OnInit, Inject } from '@angular/core';
// import * as $ from 'jquery';

import { TodoListService } from './services/todo-list.service';
import { TodoGroup } from './models/todo-group.model';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'almatar-task';
  todoLists: TodoGroup[] = []
  toggleIsActive: boolean = false;
  navbarText: string = ''
  constructor(private todoListService: TodoListService){}

  ngOnInit() {
    this.todoLists = this.todoListService.getTodoLists()
  }

  onToggleSidenav(){
    this.toggleIsActive = !this.toggleIsActive
  }

  //sidebar methods
  onSelectAll(){
    this.todoListService.allSelected.next()
    this.navbarText = 'all';
  }
  onSelectToday(){
    this.navbarText = 'today';
    this.todoListService.todaySelected.next()
  }
  onSelectWeek(){
    this.navbarText = 'week';
    this.todoListService.weekSelected.next();
  }
  onSelectDone(){
    this.navbarText = 'done tasks';
    this.todoListService.doneTasksSelected.next()
  }
  onSelectPending(){
    this.navbarText = 'pending tasks';
    this.todoListService.pendingTasksSelected.next()
  }
  onSelectGroup(group){
    this.todoListService.groupSelected.next(group)
  }

}
