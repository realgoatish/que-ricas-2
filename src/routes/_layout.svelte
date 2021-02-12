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

  const [layoutContent] = layout;

  const socialIcons = layoutContent.socialIcons;
</script>

<Header {...layoutContent} />
<main>
  <slot />
</main>
<Footer {socialIcons} />

<style>
  :global(*, *::before, *::after) {
    box-sizing: border-box;
  }

  :global(:root) {
    font-size: calc(1rem + 0.5vw);
  }

  :global(:root) {
    font-size: 96%;
  }

  :global(html, body, div, span, applet, object, iframe, button, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video) {
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */
  :global(article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section) {
    display: block;
  }

  :global(section) {
    max-width: 75ch;
    margin: 0 auto;
  }

  @font-face {
    font-family: "FiraSansCondensed-Book";
    src: url("/fonts/fira-sans/FiraSansCondensed-Book.eot") format("eot"),
      url("/fonts/fira-sans/FiraSansCondensed-Book.woff2") format("woff2"),
      url("/fonts/fira-sans/FiraSansCondensed-Book.woff") format("woff");
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }
  :global(body) {
    font-family: "FiraSansCondensed-Book", -apple-system, BlinkMacSystemFont,
      Segoe UI, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
      sans-serif;
    /* font-size: 85%; */
    line-height: 1.5;
    letter-spacing: 0.1ch;
    color: #333;
    overflow-x: hidden;
    background-image: url("/g/images/background-image/palm-tree-background-800.jpg");
    background-attachment: fixed;
    background-position-x: 50%;
    background-position-y: 50%;
    background-size: cover;
    background-repeat: no-repeat;
  }

  :global(:focus) {
    outline: none;
  }

  :global(figure) {
    /* Safari hack to prevent bottom gap between figure and image */
    line-height: 0;
  }

  :global(h1) {
    font-size: 1.75rem;
  }

  :global(h2) {
    font-size: 1.5rem;
  }

  :global(h3) {
    font-size: 1.25rem;
  }

  :global(h1, h2) {
    color: #225a8c;
    text-shadow: 1px 1px 2px #4f85f7;
  }

  :global(a) {
    color: inherit;
  }

  :global(body ul) {
    list-style: none;
  }

  :global(header p) {
    text-align: center;
  }

  /* BEGIN CODE BLOCK FOR PINNING FOOTER TO BOTTOM OF PAGE */

  :global(body, #sapper, main) {
    min-height: 100vh;
  }

  :global(html) {
    height: 100vh;
  }

  :global(main) {
    display: flex;
    flex-direction: column;
  }

  :global(.page-content) {
    flex: 1 0 auto;
  }

  :global(footer) {
    flex-shrink: 0;
  }

  /* END CODE BLOCK FOR PINNING FOOTER TO BOTTOM OF PAGE */

  :global(.section-wrapper) {
    padding: 0.5rem;
  }

  :global(.container) {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
  }

  @media (min-width: 400px) {
    :global(:root) {
      font-size: 107%;
    }

    :global(.section-wrapper) {
      padding: 2rem 0.9rem;
    }
  }

  @media (min-width: 960px) {
    :global(.section-wrapper) {
      padding: 2rem 6rem;
    }

    :global(.container) {
      width: 90%;
    }
  }
</style>
