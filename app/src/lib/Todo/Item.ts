class Item {
  constructor(
    private readonly _text: string,
    private readonly _completed: boolean = false
  ) {}

  public text(): string {
    return this._text
  }

  public completed(): boolean {
    return this._completed
  }

  public completes(): Item {
    return new Item(this.text(), !this.completed())
  }
}

export { Item }