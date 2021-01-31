import { Status } from "./Status"

class Task {
  public static active(item: string): Task {
    return new Task(Status.Active, item)
  }

  public static completed(item: string): Task {
    return new Task(Status.Completed, item)
  }

  private constructor(
    public readonly status: Status,
    public readonly item: string) {}

  public toggle(): Task {
    const status = Status.toggle(this.status)
    return new Task(status, this.item) 
  }

  public equal(other: Task): boolean {
    return this.status.equal(other.status) && this.item === other.item
  }

  public include(status: Status): boolean {
    return status.include(this.status)
  }
}

export { Task }