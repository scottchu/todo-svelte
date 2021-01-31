import { Status } from "./Status"
import type { Task } from "./Task"

class Todo {
  constructor(
    private readonly ts: Task[] = [],
    private readonly status: Status = Status.All
  ) {}

  public add(task: Task): Todo {
    const tasks = [task, ...this.ts]
    return this.update({ tasks })
  }

  public del(task: Task): Todo {
    const tasks = this.ts.filter(t => !task.equal(t))
    return this.update({ tasks })
  }

  public toggle(task: Task): Todo {
    const newTask = task.toggle()
    return this.replace(task, newTask)
  }

  public replace(oldTask: Task, newTask: Task) {
    const index = this.ts.findIndex(t => t.equal(oldTask))
    const length = this.ts.length

    const tasks = [
      ...this.ts.slice(0, index),
      newTask,
      ...this.ts.slice(index + 1, length)
    ]

    return this.update({ tasks })
  }

  public tasks(): Task[] {
    return this.ts
      .filter(t => t.include(this.status))
  }

  public select(status: Status): Todo {
    if (this.status.equal(status))
      return this
      
    return this.update({status: status})
  }

  private update({
    tasks = this.ts,
    status = this.status
  }: {status?: Status, tasks?: Task[]}): Todo {
    return new Todo(tasks, status)
  }
}

export { Todo }