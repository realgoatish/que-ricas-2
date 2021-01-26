<script>
  // export let segment

  import Header from "./../components/Header.svelte";
  import Footer from "./../components/Footer.svelte";

  import { stores } from "@sapper/app";
  const { page } = stores();

  import { layout } from "../transformers";
  const [layoutContent] = layout;

  const socialIcons = layoutContent.socialIcons;
</script>

<svelte:head>
  {#if $page.path === "/"}
    <title>Home</title>
  {:else if $page.path === "/menu"}
    <title>Menu</title>
  {:else}
    <title>About</title>
  {/if}
</svelte:head>

<main>
  <Header {...layoutContent} />
  <slot />
  <Footer {socialIcons} />
</main>

<style>
  main {
    font-size: 85%;
    background-color: #fff;
  }

  @media (min-width: 400px) {
    main {
      font-size: 100%;
    }
  }
</style>
