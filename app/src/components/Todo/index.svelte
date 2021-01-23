<script lang="ts">
  import Card from "../Card"
  import List from "../List"
  import Item from "./Item"
  import Input from "./Input"
  import Filter from "./Filter"

  const statuses = ["all", "active", "completed"]
  let selectedStatus = "all"

  let items = [
    {
      text: "dlkjfalksdfjlaksdjflasdjlkasdjflaskdjflaksdjflaksdjflkajdsflkjadslkfjlakdsjfladsjfljasdlfadslfkjaldkfjlajflajkdfalkjl",
      status: "completed"
    },
    {
      text: "b",
      status: "active"
    },
    {
      text: "c",
      status: "active"
    },
  ]

  $: showItems = items.filter(item => {
    return selectedStatus === "all" || selectedStatus === item.status
  })

  let newTodo = ""

  const onSubmit = ({detail}: CustomEvent): void => {
    const item = {text: detail, status: "active"}
    items = [item, ...items]
    newTodo = ""
  }

  const toggleStatus = (status: string) => {
    return status === "completed" ? "active" : "completed"
  }

  const toggleItem = ({detail}: CustomEvent) => {
    const item = detail
    const index = items.indexOf(item)

    if (index === -1) return

    const newItem = {...item, status: toggleStatus(item.status) }
    items.splice(index, 1, newItem)
    items = items
    
  }

  const removeItem = ({detail}: CustomEvent) => {
    const item = detail
    const index = items.indexOf(item)

    if (index === -1) return

    items.splice(index, 1)
    items = items
  }

</script>

<style>
  .todo-app {
    display: flex;
    justify-content: center;
    align-items: flex-start;

    padding-top: 36px;
    
    box-sizing: border-box;
  }

  .inner-container {
    min-width: 360px;
    width: 50%;
    max-width: 480px;
  }

</style>

<div class="todo-app">
  <div class="inner-container">
    <Card>
      <div class="header" slot="header">
        <Input 
        bind:value={newTodo} 
        placeholder={"New Todo..."}
        on:submit={onSubmit} />
      </div>
      <div class="content" slot="content">
        <List items={showItems} let:item>
          <Item 
            item={item} 
            on:click={toggleItem} 
            on:close={removeItem} />
        </List>
      </div>
      <div class="footer" slot="footer">
        <Filter 
        {statuses}
        bind:selected={selectedStatus} />
      </div>
    </Card>
  </div>
</div>