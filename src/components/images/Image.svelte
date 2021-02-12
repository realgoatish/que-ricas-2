<script>
  export let imageSlug;
  export let allImages;
  export let processedImageSizes;
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
    if (thisImage) {
      thisImage.onload = () => {
        loaded = true;
      };
    }
  });

  if (processedImageSizes) {
    processedImageSizes.reverse();
  }
</script>

{#if allImages && processedImageSizes}
  <picture>
    {#each processedImageSizes as size}
      <source
        type="image/webp"
        media={`
          (min-width: ${size === "400" ? "10" : size}px)`}
        srcset={src.replace(
          `${imageSlug}.jpeg`,
          `${imageSlug}-${size}.webp ${size}w`
        )}
        {sizes}
      />
    {/each}
    {#each processedImageSizes as size}
      <source
        type="image/jpeg"
        media={`
          (min-width: ${size === "400" ? "10" : size}px)`}
        srcset={src.replace(
          `${imageSlug}.jpeg`,
          `${imageSlug}-${size}.jpeg ${size}w`
        )}
        {sizes}
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
