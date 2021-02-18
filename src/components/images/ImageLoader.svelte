<script>
  import IntersectionObserver from "./IntersectionObserver.svelte";
  import Image from "./Image.svelte";

  export let thumbnail;
  export let imageSlug;
  export let imageExtension;
  export let allImages;
  export let sizes;
  export let processedImageSizes;
  export let src;
  export let alt;
  export let width;
  export let height;
  export let rounded;
  export let ariaLabel;

</script>

<IntersectionObserver once={true} let:intersecting>
  {#if intersecting}
    <Image
      {thumbnail}
      {imageSlug}
      {imageExtension}
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
