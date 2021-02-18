<script>
  import ImageWrapper from './ImageWrapper.svelte'
  
  import { onMount } from "svelte";

  export let thumbnail;
  export let imageSlug;
  export let imageExtension;
  export let allImages;
  export let processedImageSizes;
  export let sizes;
  export let src;
  export let alt;
  export let width;
  export let height;
  export let rounded;
  export let ariaLabel;

  let loaded = false;
  let thisImage;
  let currentSrc;


  onMount(() => {
    if (thisImage) {
      thisImage.onload = () => {
        loaded = true;
        currentSrc = thisImage.currentSrc
      };
    }
  });

  if (processedImageSizes) {
    processedImageSizes.reverse();
  }
</script>

<ImageWrapper {currentSrc} {thumbnail}>
  <!-- ^ ImageWrapper component only wraps the slot content below in an <a> tag if thumbnail={true} was passed from parent/page, otherwise it just renders this component unchanged through a bare <slot> -->
  {#if allImages && processedImageSizes}
    <picture>
      {#each processedImageSizes as size}
        <source
          type="image/webp"
          media={`
            (min-width: ${size === "400" ? "10" : size}px)`}
          srcset={src.replace(
            `${imageSlug}.${imageExtension}`,
            `${imageSlug}-${size}.webp ${size}w`
          )}
          {sizes}
        />
      {/each}
      {#each processedImageSizes as size}
        <source
          type={`image/${imageExtension === 'jpg' ? 'jpeg' : imageExtension}`}
          media={`
            (min-width: ${size === "400" ? "10" : size}px)`}
          srcset={src.replace(
            `${imageSlug}.${imageExtension}`,
            `${imageSlug}-${size}.${imageExtension} ${size}w`
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
</ImageWrapper>

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
