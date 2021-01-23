<script lang="ts">
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher()
  import { slide, blur } from "svelte/transition";

  import Button from "../Button"
  import Card from "../Card"
  import Label from "../Label"
  import Text from "../Text"

  export let item: any

  const onClick = () => dispatch("click", item)
  const onClose = () => dispatch("close", item)
</script>

<style>
  .header {
    display: flex;
    justify-content: flex-end;
  }

  .content {
    cursor: pointer;
  }
</style>

<div 
  class="container" 
  in:slide={{duration: 250}} 
  out:slide={{duration: 250}}>
  
  <Card>
    <div slot="header">
      <div class="header">
        <Button on:click={onClose}>×</Button>
      </div>
    </div>
    <div slot="content" on:click={onClick} in:blur>
      <div class="content">
        <Text lineThrough={item.status == "completed"}>
          {item.text}
        </Text>
      </div>
    </div>
    <div slot="footer">
      <Label 
        capitalize 
        value={item.status} />
    </div>
  </Card>
  
</div>
