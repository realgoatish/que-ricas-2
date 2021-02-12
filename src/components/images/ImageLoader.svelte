<script>
  export let imageSlug;
  export let allImages;
  export let sizes;
  export let processedImageSizes;
  export let src;
  export let alt;
  export let width;
  export let height;
  export let rounded;
  export let ariaLabel;

  import IntersectionObserver from "./IntersectionObserver.svelte";
  import Image from "./Image.svelte";
</script>

<IntersectionObserver once={true} let:intersecting>
  {#if intersecting}
    <Image
      {imageSlug}
      {allImages}
      {processedImageSizes}
      {src}
      {alt}
      {sizes}
      {ariaLabel}
      {width}
      {height}
      {rounded}
    />
  {/if}
</IntersectionObserver>
