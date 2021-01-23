<script lang="ts">
  import { createEventDispatcher } from "svelte"
  const dispatcher = createEventDispatcher()

  export let value: string
  export let active: boolean = false

  const onClick = () => dispatcher("click", value)
</script>

<style>
  .container {
    cursor: pointer;
  }

  p.tag {
    color: #8F8F8F;
    font-size: 12px;
    font-weight: 300;
    line-height: 1em;
    transition: all ease-in-out 250ms;
  }

  p.tag.active {
    color: #4F4F4F;
    font-weight: 500;
  }
</style>

<div class="container" on:click={onClick}>
  <p class="tag" class:active>
    {value}
  </p>
</div>