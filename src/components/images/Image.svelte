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

  import { onMount } from "svelte";

  let loaded = false;
  let thisImage;
  let imgSizesAttribute;
  let imgSrcsetAttribute;

  onMount(() => {
    if (thisImage) {
      thisImage.onload = () => {
        loaded = true;
      };
    }
  });

  if (sizes) {
    imgSizesAttribute = sizes
      .map((size) => {
        return `(${
          size === "1200" ? "min" : "max"
        }-width: ${size}px) ${size}px`;
      })
      .join(", ");
  }
  if (srcset) {
    imgSrcsetAttribute = sizes
      .map((size) => {
        return (
          src.replace(`${imageSlug}.jpeg`, `${imageSlug}-${size}.jpeg`) +
          ` ${size}w`
        );
      })
      .join(", ");
  }
</script>

{#if srcset && sizes}
  <picture>
    {#each sizes as size}
      <source
        type="image/webp"
        media={`
          (${size === "1200" ? "min" : "max"}-width: ${size}px)`}
        srcset={src.replace(`${imageSlug}.jpeg`, `${imageSlug}-${size}.webp`)}
      />
    {/each}
    {#each sizes as size}
      <source
        type="image/jpeg"
        media={`
          (${size === "1200" ? "min" : "max"}-width: ${size}px)`}
        srcset={src.replace(`${imageSlug}.jpeg`, `${imageSlug}-${size}.jpeg`)}
      />
    {/each}
    <img
      bind:this={thisImage}
      class:loaded
      class:rounded
      {width}
      {height}
      {src}
      {alt}
      srcset={imgSrcsetAttribute}
      sizes={imgSizesAttribute}
    />
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
