<script>
  export let srcset;
  export let sizes;
  export let src;
  export let alt;
  export let width;
  export let height;
  export let rounded;
  export let ariaLabel;

  import { onMount } from "svelte";

  let loaded = false;
  let thisImage;

  onMount(() => {
    thisImage.onload = () => {
      loaded = true;
    };
  });
</script>

<img
  {srcset}
  {sizes}
  {src}
  {alt}
  {width}
  {height}
  {ariaLabel}
  class:loaded
  class:rounded
  bind:this={thisImage}
/>

<style>
  img {
    width: 100%;
    height: auto;
    opacity: 0;
    transition: opacity 1200ms ease-out;
  }
  img.loaded {
    opacity: 1;
  }

  img.rounded {
    border-radius: 10px;
  }
</style>
