import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Task } from '../models/task.model';
import { TodoGroup } from '../models/todo-group.model';

@Injectable({
  providedIn: 'root',
})
export class TodoListService {

  todaySelected = new Subject();
  allSelected = new Subject();
  weekSelected = new Subject();
  doneTasksSelected = new Subject();
  pendingTasksSelected = new Subject();
  groupSelected = new Subject()

  selectedTask: Task;

  todoLists: TodoGroup[] = [
    {
      groupName: 'group 1',
      tasks: [
        {
          taskTitle: 'coffee-bears',
          taskDate: new Date("2021-05-15T01:10:00Z"),
          taskState: 'pending',
          taskDescription: 'this is coffee-bears task',
          taskPriority: 'high',
          taskGroup: 'group 1',
        },
        {
          taskTitle: 'milk',
          taskDate: new Date(),
          taskState: 'pending',
          taskDescription: 'this is milk task',
          taskPriority: 'low',
          taskGroup: 'group 1',
        },
      ],
    },
    {
      groupName: 'group 2',
      tasks: [
        {
          taskTitle: 'mortgage',
          taskDate: new Date(),
          taskState: 'pending',
          taskDescription: 'this is morgage task',
          taskPriority: 'mid',
          taskGroup: 'group 2',
        },
      ],
    },
    {
      groupName: 'group 3',
      tasks: [
        {
          taskTitle: 'apple',
          taskDate: new Date("2021-05-16T01:10:00Z"),
          taskState: 'pending',
          taskDescription: 'this is apple task',
          taskPriority: 'high',
          taskGroup: 'group 3',
        },
        {
          taskTitle: 'banana',
          taskDate: new Date("2021-05-15T01:10:00Z"),
          taskState: 'pending',
          taskDescription: 'this is banana task',
          taskPriority: 'low',
          taskGroup: 'group 3',
        },
        {
          taskTitle: 'grape',
          taskDate: new Date(),

          taskState: 'pending',
          taskDescription: 'this is grape task',
          taskPriority: 'mid',
          taskGroup: 'group 3',
        },
      ],
    },
    {
      groupName: 'group 4',
      tasks: [
        {
          taskTitle: 'tea',
          taskDate: new Date("2021-05-17T01:10:00Z"),
          taskState: 'pending',
          taskDescription: 'this is tea task',
          taskPriority: 'high',
          taskGroup: 'group 4',
        },
        {
          taskTitle: 'ne3na3',
          taskDate: new Date("2021-05-16T01:10:00Z"),
          taskState: 'pending',
          taskDescription: 'this is ne3na3 task',
          taskPriority: 'mid',
          taskGroup: 'group 4',
        },
      ],
    },
    {
      groupName: 'group 5',
      tasks: [
        {
          taskTitle: 'cheese',
          taskDate: new Date("2021-05-15T01:10:00Z"),
          taskState: 'pending',
          taskDescription: 'this is cheese task',
          taskPriority: 'mid',
          taskGroup: 'group 5',
        },
        {
          taskTitle: 'roquefort',
          taskDate: new Date("2021-05-15T01:10:00Z"),
          taskState: 'pending',
          taskDescription: 'this is roquefort task',
          taskPriority: 'low',
          taskGroup: 'group 5',
        },
      ],
    },
    {
      groupName: 'group 6',
      tasks: [
        {
          taskTitle: 'peef',
          taskDate: new Date("2021-05-16T01:10:00Z"),
          taskState: 'pending',
          taskDescription: 'this is cheese task',
          taskPriority: 'low',
          taskGroup: 'group 6',
        },
        {
          taskTitle: 'chicken',
          taskDate: new Date("2021-05-17T01:10:00Z"),
          taskState: 'pending',
          taskDescription: 'this is chicken task',
          taskPriority: 'mid',
          taskGroup: 'group 6',
        },
      ],
    },
  ];

  constructor() {}

  getTodoLists() {
    return this.todoLists.slice();
  }

  selectTask(task: Task) {
    this.selectedTask = task;
  }

  addTodoTask(task: Task) {
    let requiredGroup = this.todoLists.find(
      (g) => g.groupName === task.taskGroup
    );
    requiredGroup.tasks.push(task);
  }


}
