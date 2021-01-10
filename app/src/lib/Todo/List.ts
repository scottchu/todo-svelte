import type { Item } from "./Item"

class List {
  constructor(
    private readonly _name: string,
    private _items: Item[]
  ) {}

  public name(): string {
    return this._name
  }

  public items(): Item[] {
    return this._items
  }

  public append(item: Item): List {
    return new List(this.name(), [...this.items(), item])
  }

  public remove(item: Item): List {
    const items = this.items()
      .filter((i) => i != item)

    return new List(this.name(), items)
  }
}

export { List }