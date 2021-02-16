<script>

  export let currentSrc
  export let thumbnail

</script>

{#if thumbnail}
  <a href={currentSrc}>
    <slot></slot>
  </a>
{:else}
  <slot></slot>
{/if}