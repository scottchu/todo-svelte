<script lang="ts">
  import { Item } from "lib/Todo/Item";

  export let item: Item = new Item("complete todo app")
  
  const toggleCompletes = (_event: MouseEvent) => {
    item = item.completes()
  }

  $: completed = item.completed() ? "completed" : ""
  
</script>

<style>
  .todo-item {
    cursor: pointer;
  }

  .content {
    display: flex;
    align-items: center;
  }

  .content.completed > .text {
    text-decoration: line-through;
  }

  .status {
    color: #676767;
  }

  .text {
    font-size: 1em;
  }

</style>

<div class="todo-item">
  <div class="content {completed}" on:click={toggleCompletes}>
    <p class="text">
      {item.text()}
    </p>
    <p class="status">
      {completed}
    </p>
  </div>
</div>