<script>
  export let srcset;
  export let sizes;
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
      {srcset}
      {sizes}
      {src}
      {alt}
      {ariaLabel}
      {width}
      {height}
      {rounded}
    />
  {/if}
</IntersectionObserver>
