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

<!-- URGENT code for emergency banner -->
<p>
  The restaurant is open today, but Haddon Ave. is closed for an event. Please
  call to order from <a href="/menu/">our menu</a>
</p>
<Header {...layoutContent} />
<main>
  <slot />
</main>
<Footer {socialIcons} />

<style>
  /* URGENT code for emergency banner */
  p {
    background: orange;
    color: black;
    font-size: 1.25rem;
    text-align: center;
  }

  p a {
    color: blue;
  }
</style>
