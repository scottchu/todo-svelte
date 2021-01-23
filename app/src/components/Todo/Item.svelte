<script lang="ts">
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher()

  export let item: any = {}

  const toggle = () => dispatch("toggle", item)
  const remove = () => dispatch("remove", item)
</script>

<style>
  .todo-item {
    cursor: pointer;
  }

  .content {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
  }

  .content.completed > .text {
    text-decoration: line-through;
  }

  .status {
    flex: 0 0 auto;
    color: #676767;
    font-size: 12px;
  }

  .text {
    flex: 1 1 auto;
    font-size: 12px;
  }

  button.remove-button {
    flex: 0 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;

    border: none;
    outline: none;
    font-size: 8px;
    background-color: #FFFFFF;
  }

</style>

<div class="todo-item">
  <div 
    class="content" 
    class:completed={item.status === "completed"} 
    on:click={toggle}>
    
    <p class="text">
      {item.text}
    </p>
    <p class="status">
      {item.status}
    </p>

    <button 
      class="remove-button"
      on:click|stopPropagation={remove}>
      ✕
    </button>
  </div>
</div>