<script>
  // export let segment

  import { layout } from "../transformers";
  const [layoutContent] = layout;

  import Header from "./../components/Header.svelte";
</script>

<main>
  <Header {...layoutContent} />
  <slot />
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
