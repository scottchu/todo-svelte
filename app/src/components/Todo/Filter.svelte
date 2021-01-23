<script lang="ts">
  export let statuses: string[] = []

  export let active: string

  const click = (status: string) => active = status
</script>

<style>
  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;

    justify-content: flex-start;
    align-items: center;

  }

  li {

  }

  button {
    background: none;
    border: none;
    outline: none;
    padding: 6px 12px;
    font-size: 12px;
    color: #AFAFAF;
    transition: all ease-in-out 250ms;
  }

  button.active {
    color: #4F4F4F;
    font-weight: 500;
  }
</style>

<div class="filter">
  <div class="content">
    <ul>
      {#each statuses as status}
        <li>
          <button 
            class:active={active === status}
            on:click={() => click(status)}>
            {status}
          </button>
        </li>
      {/each}
    </ul>
  </div>
</div>