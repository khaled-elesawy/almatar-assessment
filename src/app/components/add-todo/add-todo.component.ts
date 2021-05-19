import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TodoListService } from 'src/app/services/todo-list.service';
import { TodoGroup } from 'src/app/models/todo-group.model';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {
  addTodoForm: FormGroup;
  todoLists: TodoGroup[];

  constructor(private todoListService: TodoListService) { }

  ngOnInit(): void {
    this.addTodoForm = new FormGroup({
      'taskTitle': new FormControl('', Validators.required),
      'taskDate': new FormControl('', Validators.required),
      'taskState': new FormControl('pending'),
      'taskDescription': new FormControl('', Validators.required),
      'taskPriority': new FormControl('', Validators.required),
      'taskGroup': new FormControl('', Validators.required),
    })

    this.todoLists = this.todoListService.getTodoLists()
  }

  onReset(){
    this.addTodoForm.reset()
  }

  onSubmit(){
    this.todoListService.addTodoTask(this.addTodoForm.value);
    this.addTodoForm.reset()
  }

}
