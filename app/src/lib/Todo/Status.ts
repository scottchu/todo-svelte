class Status {

  public static toggle(status: Status): Status {
    switch (status.key) {
      case "Active":
        return this.Completed
      case "Completed": 
        return this.Active
      default:
        return this.All
    }
  }

  public static get Active(): Status {
    return new Status("Active", 0)
  }

  public static get Completed(): Status {
    return new Status("Completed", 0)
  }
  public static get All(): Status {
    return new Status("All", 1)
  }

  private constructor(
    public readonly key: string,
    public readonly rank: number
  ) {}

  public equal(other: Status): boolean {
    return (
      this.key === other.key &&
      this.rank === other.rank
    )
  }

  public include(other: Status): boolean {
    return this.rank > other.rank || this.equal(other)
  }
}

export { Status }