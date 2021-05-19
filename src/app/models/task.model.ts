export class Task {
  taskTitle: string;
  taskDate: Date;
  taskState: string;
  taskDescription: string;
  taskPriority: string;
  taskGroup: string

  constructor(task: {
    taskTitle?: string;
    taskDate?: Date;
    taskState?: string;
    taskDescription?: string;
    taskPriority?: string;
    taskGroup?: string
  }) {
    if (task) {
      this.taskTitle = task.taskTitle;
      this.taskDate = task.taskDate;
      this.taskState = task.taskState;
      this.taskDescription = task.taskDescription;
      this.taskPriority = task.taskPriority;
      this.taskGroup = task.taskGroup
    }
  }
}
