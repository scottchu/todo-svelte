<script lang="ts">
  import { createEventDispatcher } from "svelte"
  const dispatcher = createEventDispatcher()

  export let value: string
  export let highlight: boolean
  export let capitalize: boolean

  const onClick = () => dispatcher("click", value)
</script>

<style>
  span.label {
    color: #8F8F8F;
    font-size: 12px;
    font-weight: 300;
    line-height: 1em;
    transition: all ease-in-out 250ms;
  }

  span.label.highlight {
    color: #4F4F4F;
    font-weight: 500;
  }

  span.label.capitalize {
    text-transform: capitalize;
  }
</style>

<span 
  class="label"
  class:highlight
  class:capitalize
  on:click={onClick}>
  {value}
</span>