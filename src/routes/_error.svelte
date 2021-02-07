<script>
  import Card from "./../components/Card.svelte";
  import ImageLoader from "./../components/images/ImageLoader.svelte";

  export let status;
  export let error;

  const dev = process.env.NODE_ENV === "development";
</script>

<svelte:head>
  <title>{status}</title>
  <meta name="robots" content="noindex" />
</svelte:head>

<Card>
  <article>
    <h1>Woops!</h1>
    <figure>
      <ImageLoader
        src={"./images/404/woops-pusheen-cat.png"}
        alt={"pusheen cat who put his face through a slice of bread trying to find a page that doesn't exist"}
      />
    </figure>
    <p>The page you're looking for doesn't exist!</p>
  </article>
</Card>

{#if dev && error.stack}
  <pre>{error.stack}</pre>
{/if}

<style>
  /* @font-face kit by Fonts2u (https://fonts2u.com) */
  @font-face {
    font-family: "Beach Resort";
    src: url("/fonts/beach-resort/Beach_Resort.eot?") format("eot"),
      url("/fonts/beach-resort/Beach_Resort.woff") format("woff"),
      url("/fonts/beach-resort/Beach_Resort.ttf") format("truetype"),
      url("/fonts/beach-resort/Beach_Resort.svg#BeachResort") format("svg");
    font-weight: normal;
    font-style: normal;
  }

  article {
    min-height: 100vh;
    display: flex;
    flex-flow: column nowrap;
    text-align: center;
    padding: 2rem 0;
  }

  h1 {
    font-family: "Beach Resort";
    font-size: 400%;
    color: #000;
    text-shadow: none;
  }

  figure {
    max-width: 200px;
    margin: 0 auto;
  }

  p {
    font-size: 150%;
  }

  @media (min-width: 400px) {
    p {
      font-size: 200%;
    }
  }

  @media (min-width: 960px) {
    article {
      min-height: revert;
    }
  }
</style>
