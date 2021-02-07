<script>
  // quick hack to get a card to fill the whole space between header and footer if it needs to.
  export let stretch = 0;

  import { stores } from "@sapper/app";
  const { page } = stores();

  $: console.log(stretch);
</script>

<!-- apply the stretch class if `stretch` prop's default value hasn't been changed by the parent passing something else in.
  Did it this way instead of just importing the `currentSection` store, because we only want this behavior when it's explicitly invoked, not for all instances of the Card component -->
<div
  class="section-wrapper"
  class:stretch={stretch === 0 && $page.path === "/menu"}
>
  <div class="container">
    <slot />
  </div>
</div>

<style>
  .section-wrapper {
    background: #fff;
  }

  .stretch {
    min-height: 100vh;
  }

  .container {
    background: #fff;
  }

  @media (min-width: 960px) {
    .section-wrapper {
      background: inherit;
      border: none;
      box-shadow: none;
    }

    .container {
      padding: 1rem;
      border: 1px solid #aaa;
      border-radius: 2px;
      box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
    }
  }
</style>
