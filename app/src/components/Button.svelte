<script lang="ts">
  import { createEventDispatcher } from "svelte"
  const dispatcher = createEventDispatcher()

  const onClick = () => dispatcher("click")
</script>

<style>
  button.button {
    display: flex;
    justify-content: center;
    align-items: center;

    border: none;
    color: #8F8F8F;
    outline: none;
    border-radius: 3px;
    
    line-height: 0.9em;
    background-color: transparent;

    mix-blend-mode: normal;
    transform: scale3d(1, 1, 1);
    transition: all ease-in-out 250ms;
  }

  button:hover {
    color: #4F4F4F;
    background: #A3D0DB;
    transform: scale3d(1.1, 1.1, 1);
  }

  button:active {
    color: #4F4F4F;
    filter: hue-rotate(30deg);
    transform: scale3d(0.9, 0.9, 1);
  }

  
</style>

<button class="button" on:click={onClick}>
  <slot></slot>
</button>