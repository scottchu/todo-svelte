<script lang="ts">
  import List from "./List"
  import Item from "./Item"
  import Input from "./Input"
  import Filter from "./Filter"

  const statuses = ["all", "active", "completed"]
  let selectedStatus = "all"

  let items = [
    {
      text: "a",
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

{@debug selectedStatus}

<style>
  .todo-app {
    height: 100vh;
    width: 100vw;
    box-sizing: border-box;

    padding: 30px;
  }

  .inner-container {
    min-width: 360px;
    width: 50%;
    margin: 0 auto;

    border: 1px solid red;
  }

  header {
    border-bottom: 1px solid grey;
  }

  footer {
    padding: 0 12px;
  }
</style>

<div class="todo-app">
  <div class="inner-container">
    <header>
      <Input 
        bind:value={newTodo} 
        placeholder={"New Todo..."}
        on:submit={onSubmit} />
    </header>
    <main>
      <List items={showItems} let:prop={item}>
        <Item 
          item={item} 
          on:toggle={toggleItem}
          on:remove={removeItem} />
      </List>
    </main>
    <footer>
      <Filter 
        {statuses}
        bind:selected={selectedStatus} />
    </footer>
  </div>
</div>