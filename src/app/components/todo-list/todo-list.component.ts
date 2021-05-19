import { Component, OnInit } from '@angular/core';

import { TodoListService } from 'src/app/services/todo-list.service';
import { TodoGroup } from 'src/app/models/todo-group.model';
import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  todoLists: TodoGroup[] = [];
  copyTodoList: TodoGroup[] = [];
  filteredTitle: string = '';
  filteredGroup: string = '';
  filteredDate: Date;
  multipleSelectedTasks: Task[] = [];

  constructor(private todoListService: TodoListService) {}

  ngOnInit(): void {
    this.todoLists = this.todoListService.getTodoLists();
    this.copyTodoList = this.todoLists.map((list) => ({ ...list }));

    //sidebar selections

    this.todoListService.todaySelected.subscribe(() => {
      this.onSelectDate(this.getDate(new Date()));
    });

    this.todoListService.weekSelected.subscribe(
      () => {
        this.todoLists = this.copyTodoList.map((list) => ({ ...list }));
      }
    )

    this.todoListService.allSelected.subscribe(() => {
      this.todoLists = this.copyTodoList.map((list) => ({ ...list }));
    });

    this.todoListService.doneTasksSelected.subscribe(() => {
      this.todoLists.forEach((list) => {
        list.tasks = list.tasks.filter((task) => task.taskState === 'done');
      });
    });
    this.todoListService.pendingTasksSelected.subscribe(() => {
      this.todoLists.forEach((list) => {
        list.tasks = list.tasks.filter((task) => task.taskState === 'pending');
      });
    });

    this.todoListService.groupSelected.subscribe((group: TodoGroup) => {
      this.todoLists = this.copyTodoList.map((list) => ({ ...list }));
      this.todoLists.forEach((list) => {
        list.tasks = list.tasks.filter(
          (task) => task.taskGroup == group.groupName
        );
      });
      return this.todoLists;
    });
  }

  // date filters
  onSelectDate(date) {
    this.todoLists = this.copyTodoList.map((list) => ({ ...list }));
    this.todoLists.forEach((list) => {
      list.tasks = list.tasks.filter(
        (task) => this.getDate(task.taskDate) == date
      );
    });
    return this.todoLists;
  }

  getDate(date) {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return year + '-' + month + '-' + day;
  }

  // individual task actions

  //more details
  onSelectTask(task: Task) {
    this.todoListService.selectTask(task);
  }

  // done button
  onDoneTask(task: Task) {
    task.taskState = 'done';
  }

  // undo button
  onPendingTask(task: Task) {
    task.taskState = 'pending';
  }

  // delete button
  onDeleteTask(task, taskIndex) {
    let requiredGroup = this.todoLists.find((g) => g.tasks[taskIndex] === task);
    requiredGroup.tasks.splice(taskIndex, 1);
  }

  //multiple action buttons

  onSelectMultiple(event, task) {
    if (event.target.checked) {
      this.multipleSelectedTasks.push(task);
    } else {
      for (var i = 0; i < this.todoLists.length; i++) {
        if (this.multipleSelectedTasks[i] == task) {
          this.multipleSelectedTasks.splice(i, 1);
        }
      }
    }
  }

  onDoneMultiple() {
    for (let i = 0; i < this.multipleSelectedTasks.length; i++) {
      this.multipleSelectedTasks[i].taskState = 'done';
    }
  }

  onPendingMultiple() {
    for (let i = 0; i < this.multipleSelectedTasks.length; i++) {
      this.multipleSelectedTasks[i].taskState = 'pending';
    }
  }

  onDeleteMultiple() {
    this.todoLists = this.copyTodoList.slice();
    this.todoLists.forEach((list) => {
      list.tasks = list.tasks.filter(
        (task) => !this.multipleSelectedTasks.includes(task)
      );
    });
  }
}
