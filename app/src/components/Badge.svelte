<script lang="ts">
  import { createEventDispatcher } from "svelte"
  const dispatcher = createEventDispatcher()
  import Label from "./Label"
  
  export let value: string
  export let highlight: boolean

</script>

<style>
  .badge {
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 3px 6px;
    background: none;
    border-radius: 1px;
  }

  .badge.highlight {
    background-color: #A3D0DB;
  }

  .badge.highlight :global(span.label) {
    color: #4F4F4F;
  }
</style>

<div 
  class="badge" 
  class:highlight>
  
  <Label 
    value={value} 
    highlight={highlight} 
    capitalize />
</div>