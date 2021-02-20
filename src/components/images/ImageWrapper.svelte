<script>


  export let currentSrc
  export let thumbnail


</script>

{#if thumbnail}
  <a sapper:noscroll href={currentSrc}>
    <slot></slot>
  </a>
{:else}
  <slot></slot>
{/if}