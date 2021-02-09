<script>
  export let src;
  export let alt;
  export let width;
  export let height;
  export let rounded;
  export let ariaLabel;
  // export let figcaption

  import IntersectionObserver from "./IntersectionObserver.svelte";
  import Image from "./Image.svelte";
</script>

<IntersectionObserver once={true} let:intersecting>
  {#if intersecting}
    <Image {alt} {src} {ariaLabel} {width} {height} {rounded} />
  {/if}
</IntersectionObserver>
