import { Task } from './task.model';

export class TodoGroup {
  groupName: string;
  tasks: Task[];

  constructor(todoGroup: {
    groupName?: string;
    tasks?: Task[]
    })
  {
    if(todoGroup){
      this.groupName = todoGroup.groupName;
      this.tasks = todoGroup.tasks
    }
  }
}
