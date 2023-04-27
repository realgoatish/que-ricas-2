<script context="module">
  export async function preload() {
    const res = await this.fetch(`layout.json`);

    const layout = await res.json();
    return { layout };
  }
</script>

<script>
  export let segment;

  import Header from "./../components/Header.svelte";
  import Footer from "./../components/Footer.svelte";

  import { stores } from "@sapper/app";
  const { page } = stores();

  export let layout;

  // $: console.log(
  //   `layout data on arrival in front end: ${JSON.stringify(layout, null, 2)}`
  // );

  const [layoutContent] = layout;

  const socialIcons = layoutContent.socialIcons;
</script>

<Header {...layoutContent} />
<main>
  <slot />
</main>
<Footer {socialIcons} />

<style>
  /* :global(body) {
    font-size: 85%;
  }

  @media (min-width: 400px) {
    :global(body) {
      font-size: 100%;
    }
  } */
</style>
