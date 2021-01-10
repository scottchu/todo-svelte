<script lang="ts">
  import { Item } from "lib/Todo/Item"
  import { List } from "lib/Todo/List"
  import TodoItem from "./Item"

  export const list: List = new List("Pending", [
    new Item("read category theory"),
    new Item("completes the todo app"),
    new Item("prototype web worker"),
    new Item("add rxjs"),
  ])
  
</script>

<style>
  .todo-list {
    position: relative;
    border: 1px solid #EFEFEF;
  }

  .title {
    padding: 0px 12px;
  }

  ul.list {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li.item {
    padding: 6px 12px;
  }
  
  li.item:not(:last-of-type) {

  }
</style>

<div class="todo-list">
  <div class="title">
    <h3>{list.name()}</h3>
  </div>
  <ul class="list">
    {#each list.items() as item }
      <li class="item">
        <TodoItem item={item} />
      </li>
    {/each}
  </ul>
</div>