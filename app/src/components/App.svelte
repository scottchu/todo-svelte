<script lang="ts">
  import "normalize.css";
  import Todo from "./Todo"
</script>

<style>
  .app-container {
    position: absolute;
    width: 100vw;
    height: 100vh;
    box-sizing: border-box;
  }

  :global(p) {
    margin: 6px;
    line-height: 1em;
  }
  :global(h3) {
    margin: 6px;
    line-height: 1em;
  }

  :global(*) {
    font-family: Helvetica, sans-serif;
    line-height: 1em;
  }
</style>

<div class="app-container"> 
  <Todo />
</div>