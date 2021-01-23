<script lang="ts">
  export let items: unknown[]
  export let horizontal: boolean = false
</script>

<style>
  .container {
    position: relative;
  }

  ul.list {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  ul.list.horizontal {
    display: flex;
    flex-wrap: nowrap;
  }

</style>

<div class="container">
  <ul 
    class="list"
    class:horizontal>
    {#each items as item}
      <li class="item">
        <slot item={item}></slot>
      </li>
    {/each}
  </ul>
</div>