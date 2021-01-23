<script lang="ts">
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher()

  import List from "../List"
  import Tag from "../Tag"

  export let statuses: string[] = []

  export let selected: string = statuses[0]

  const setToActive = (status: string) => () => {
    if (selected != status) {
      selected = status
      dispatch("change", selected)
    }
  }


</script>

<style>
</style>

<div class="filter">
  <div class="content">
    <List 
      items={statuses} 
      let:item={status} 
      horizontal>
      <Tag 
        value={status}
        active={selected === status} 
        on:click={setToActive(status)} />
    </List>
  </div>
</div>