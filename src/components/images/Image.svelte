<script>
  export let imageSlug;
  export let srcset;
  export let sizes;
  export let src;
  export let alt;
  export let width;
  export let height;
  export let rounded;
  export let ariaLabel;

  // let media = [
  //   "(max-width: 600px)",
  //   "(max-width: 1000x)",
  //   "(max-width:"
  // ]

  import { onMount } from "svelte";

  let loaded = false;
  let thisImage;
  // let thisPicture;
  // let thisError;
  // let progress;

  onMount(() => {
    if (thisImage) {
      thisImage.onload = () => {
        loaded = true;
      };
    }
  });
</script>

{#if srcset && sizes}
  <!-- <picture bind:this={thisPicture} class:loaded> -->
  <picture>
    {#each sizes as size}
      <source
        type="image/webp"
        media={`
          (${
            sizes.indexOf(size) === sizes.length - 1 ? "min" : "max"
          }-width: ${size}px)`}
        srcset={src.replace(`${imageSlug}.jpeg`, `${imageSlug}-${size}.webp`)}
      />
    {/each}
    {#each sizes as size}
      <source
        type="image/jpeg"
        media={`
          (${
            sizes.indexOf(size) === sizes.length - 1 ? "min" : "max"
          }-width: ${size}px)`}
        srcset={src.replace(`${imageSlug}.jpeg`, `${imageSlug}-${size}.jpeg`)}
      />
    {/each}
    <img bind:this={thisImage} class:loaded class:rounded {src} {alt} />
  </picture>
{:else}
  <img
    {src}
    {alt}
    {width}
    {height}
    {ariaLabel}
    class:loaded
    class:rounded
    bind:this={thisImage}
  />
{/if}

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
