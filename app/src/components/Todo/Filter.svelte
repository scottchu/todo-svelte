<script lang="ts">
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  import {Badge, Button, List} from "components/Common"

  export let statuses: string[] = [];

  export let selected: string = statuses[0];

  const setToActive = (status: string) => () => {
    if (selected != status) {
      selected = status;
      dispatch("change", selected);
    }
  };
</script>

<style>
  .filter {
    padding: 6px 0;
  }
</style>

<div class="filter">
  <div class="content">
    <List items={statuses} let:item={status} horizontal>
      <Button on:click={setToActive(status)}>
        <Badge
          value={status}
          highlight={selected === status} />
      </Button>
    </List>
  </div>
</div>
