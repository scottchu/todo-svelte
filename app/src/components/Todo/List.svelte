<script lang="ts">
  export var items: any[]
</script>

<style>
  .todo-list {
    position: relative;
    border: 1px solid #EFEFEF;
  }

  ul.list {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li.item {
    padding: 6px 12px;
  }

</style>

<div class="todo-list">
  <ul class="list">
    {#each items as item}
      <li class="item">
        <slot prop={item}></slot>
      </li>
    {/each}
  </ul>
</div>