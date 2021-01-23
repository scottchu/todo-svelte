<script lang="ts">
  // import { createEventDispatcher } from "svelte";
  // const dispatch = createEventDispatcher()

</script>

<style>
  .container {
    background: white;
    border: 1px solid #CFCFCF;
    border-radius: 2px;
    
    margin-bottom: 15px;
    /* padding: 6px 12px; */
  }

  section {
    position: relative;
  }

  .header {
    padding: 6px 12px 3px;
  }

  .content {
    padding: 3px 12px;
    min-height: 36px;
  }

  .footer {
    padding: 3px 12px 6px;
    border-top: 1px solid #EFEFEF;
  }

</style>

<!-- wrapper -->
<div class="container">
  <div class="inner-container">
    <section class="header">
      <slot name="header"></slot>
    </section>

    <section class="content">
      <slot name="content"></slot>
    </section> 

    <section class="footer">
      <slot name="footer"></slot>
    </section>
  </div>
</div>