<script lang="ts">
  import { createEventDispatcher } from "svelte"

  export let value: string = ""

  export let placeholder: string
  
  const dispatch = createEventDispatcher()

  const submit = () => dispatch("submit", value)

  const isEnter = ({code, altKey, ctrlKey, metaKey, shiftKey}: KeyboardEvent) => {
    return code === "Enter" && !altKey && !ctrlKey && !metaKey && !shiftKey
  }

  const onEneter = (fn: () => void) => (event: KeyboardEvent) => {
    if (isEnter(event)) 
      fn()
  }
</script>
  
<style>
  .input-container {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;

    box-sizing: border-box;
    border-radius: 5px;
    border: 1px solid #EFEFEF;
  }

  .input {
    flex: 1 1 auto;
    width: 100%;
    
    border: none;
    outline: none;

    padding: 6px 6px;
    
    color: #4F4F4F;
    font-size: 12px;
  }

  .enter {
    flex: 0 0 auto;
    
    padding: 6px 6px;
    
    color: #FFFFFF;
    font-size: 12px;
    transition: color ease-in-out 250ms;
  }

  .enter.active {
    color: #AFAFAF;
  }
</style>

<div class="input-container">
  <input 
    class="input"
    type="text" 
    bind:value={value}
    placeholder={placeholder}
    on:keypress={onEneter(submit)} >

  <div 
    class="enter" 
    class:active={value.length > 0}>
    Enter
  </div>
</div>