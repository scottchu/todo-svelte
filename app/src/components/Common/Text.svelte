<script lang="ts">
  export let lineThrough: boolean = false

</script>

<style>
  p.text {
    line-height: 1em;
    display: block;
    color: #4F4F4F;
    font-size: 12px;
    font-weight: 300;
    line-height: 1em;
    margin: 0;
    padding: 0;
    overflow-wrap: anywhere;
    transition: all ease-in-out 250ms;
  }

  p.text.lineThrough {
    text-decoration: line-through;
  }

</style>

<p class="text" class:lineThrough>
  <slot></slot>
</p>