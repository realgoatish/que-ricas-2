<script context="module">
  export async function preload({ params, query }) {
    return this.fetch(`index.json`)
      .then((r) => r.json())
      .then((home) => {
        return { home };
      });
  }
</script>

<script>
  import BaseSEO from "./../components/BaseSEO.svelte";
  import { stores } from "@sapper/app";
  import Card from "./../components/Card.svelte";
  import ImageLoader from "./../components/images/ImageLoader.svelte";

  export let home;

  const [homepageContent] = home;

  const { page } = stores();

  let innerWidth;
</script>

<BaseSEO
  title="Home"
  description="Authentic South American fare with a funky vibe. Que Ricas has the best empanadas in South Jersey"
  canonical={`https://${$page.host}`}
  image={homepageContent.foodImage}
  altText={homepageContent.foodImageAltText}
/>

<svelte:window bind:innerWidth />

<article class="page-content">
  {#if innerWidth > 960}
    <Card>
      <figure class="figure__hero-image">
        <ImageLoader
          src={homepageContent.foodImage}
          alt={homepageContent.foodImageAltText}
          width={"500"}
          height={"500"}
        />
      </figure>
    </Card>
  {:else}
    <figure class="figure__hero-image">
      <ImageLoader
        src={homepageContent.foodImage}
        alt={homepageContent.foodImageAltText}
      />
    </figure>
  {/if}
  <Card>
    <section>
      <figure class="figure__image">
        <ImageLoader
          src={homepageContent.hdImage}
          alt={homepageContent.hdImageAltText}
        />
      </figure>
      <div class="text__article">
        <span />
        {@html homepageContent.html}
      </div>
    </section>
  </Card>
</article>

<style>
  section {
    display: flex;
    flex-flow: column nowrap;
  }

  .figure__hero-image {
    border: 3px;
    border-color: #4f86f7;
    border-bottom-style: outset;
  }

  .figure__image {
    margin: 0 auto;
    max-width: 30rem;
    box-shadow: 2px 2px 5px 4px #4f85f7, -2px -1px 5px 4px #6dfafb;
  }

  /* seems the only way to target specific html elements parsed from md dynamically passed into template is with :global */
  :global(.text__article *:not(p)) {
    text-align: center;
  }

  @media (min-width: 400px) {
    .figure__hero-image {
      border: none;
    }
  }
</style>
