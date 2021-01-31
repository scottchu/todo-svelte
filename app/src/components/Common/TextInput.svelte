<script lang="ts">
  import { createEventDispatcher } from "svelte"
  const dispatch = createEventDispatcher()
  
  import Badge from "./Badge"

  export let value: string = ""

  export let placeholder: string

  const submit = () => dispatch("submit", value)

  const isEnter = ({code, altKey, ctrlKey, metaKey, shiftKey}: KeyboardEvent) => {
    return code === "Enter" && !altKey && !ctrlKey && !metaKey && !shiftKey
  }

  const onEnter = (fn: () => void) => (event: KeyboardEvent) => {
    if (isEnter(event)) 
      fn()
  }
</script>
  
<style>
  .text-input-container {
    display: flex;
    align-items: center;
    border: 1px solid #CFCFCF;

    padding: 6px 11px;
  }

  .text-input {
    flex: 1 1 auto;
    box-sizing: border-box;
    border: none;
    outline: none;
    font-size: 12px;
    height: 100%;
  }

</style>

<div class="text-input-container">
  <input 
    class="text-input"
    type="text"
    placeholder={placeholder}
    bind:value={value}
    on:keypress={onEnter(submit)}
  />

  {#if value.length > 0}
  <Badge value="Enter" />  
  {/if}
  
</div>