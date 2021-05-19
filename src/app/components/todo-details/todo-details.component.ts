import { Component, OnInit } from '@angular/core';
import { TodoListService } from 'src/app/services/todo-list.service';
import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.scss']
})
export class TodoDetailsComponent implements OnInit {
  task: Task;

  constructor(private todoListService: TodoListService) { }

  ngOnInit(): void {
    this.task = this.todoListService.selectedTask
  }



}
