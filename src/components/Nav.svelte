<script>
  import ImageLoader from "./images/ImageLoader.svelte";
  import { clickOutside } from "./../_helpers/clickOutside";
  import { slide } from "svelte/transition";
  import { draw } from "svelte/transition";
  import { linear } from "svelte/easing";
  import { stores } from "@sapper/app";
  const { page } = stores();

  export let orderOnline;

  const navPages = [
    { linkText: "Home", route: "/" },
    { linkText: "Menu", route: "/menu" },
    { linkText: "Our Story", route: "/story" },
  ];

  let showMobileMenu = false;

  function handleMenuClicks(event) {
    showMobileMenu = !showMobileMenu;
  }

  // $: console.log($page);
</script>

<nav>
  <ul class="nav__ul--desktop">
    <li>
      <a href={orderOnline.link}>{orderOnline.text}</a>
    </li>
    {#each navPages as { linkText, route }}
      <li>
        <a class:selected={$page.path === route} rel="prefetch" href={route}
          >{linkText}</a
        >
      </li>
    {/each}
  </ul>

  <section
    class="nav__section--mobile"
    on:click={handleMenuClicks}
    use:clickOutside
    on:click_outside={showMobileMenu ? handleMenuClicks : ""}
  >
    <button aria-haspopup="true" aria-expanded={showMobileMenu}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        aria-hidden="true"
      >
        {#if !showMobileMenu}
          <path
            d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"
            in:draw={{ delay: 250, duration: 1000, easing: linear }}
          />
        {:else}
          <path
            d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414
            1.414L10 11.414l7.071 7.071 1.414-1.414L11.414
            10l7.071-7.071-1.414-1.414L10 8.586z"
            in:draw={{ delay: 250, duration: 1000, easing: linear }}
          />
        {/if}
      </svg>
    </button>
    {#if showMobileMenu}
      <ul class="nav__ul--mobile" in:slide>
        <li>
          <a href={orderOnline.link}>{orderOnline.text}</a>
        </li>
        {#each navPages as { linkText, route }}
          <li>
            <a rel="prefetch" href={route}>{linkText}</a>
          </li>
        {/each}
      </ul>
    {/if}
  </section>
</nav>

<style>
  a {
    text-decoration: none;
    text-transform: uppercase;
    display: block;

    /* vertical-align: middle; */
  }

  button {
    background: transparent;
    /* prevent hamburger menu from moving when mobile menu transitions in by pinning it to the right edge of the flex container */
    align-self: flex-end;
    border: none;
    cursor: pointer;
    width: 2rem;
  }

  .nav__ul--desktop {
    display: none;
  }

  .nav__section--mobile {
    display: flex;
    flex-flow: column nowrap;
    padding-top: 1rem;
  }
  .nav__section--mobile > * + * {
    /* this is meant to create visual symmetry between the hamburger menu icon, the mobile nav menu, and the header's bottom border.  Note that this number is different from the overall header's padding to account for some natural whitespace at the bottom of the hamburger menu icon */
    /* padding-top: 3rem; */
  }

  .nav__ul--mobile {
    display: flex;
    flex-flow: column nowrap;
    width: max-content;
    text-align: right;
  }

  .nav__ul--mobile li {
    margin-top: 1.45rem;
    border: 1px solid turquoise;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
  }

  .nav__ul--mobile a {
    transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1) background-color 1ms;
    padding: 0.6rem 0.4rem;
  }

  .nav__ul--mobile a:hover {
    background-color: #c0d3f9;
  }

  .nav__ul--mobile a:active {
    background-color: rgb(245, 124, 0);
  }

  /* media query for desktop */

  @media (min-width: 960px) {
    .nav__section--mobile {
      display: none;
    }

    .nav__ul--desktop {
      display: flex;
      flex-flow: column nowrap;
      /* vertically center the desktop ul in relation to the header's left content. logo/social/contact section got taller late 
      in the project due to need to save space at small screens. */
      padding-top: 3rem;
    }

    .nav__ul--desktop > * + * {
      margin: 1.4rem 0 0 0;
    }
    .nav__ul--desktop li {
      flex: 0 0 auto;
      text-align: center;
    }
    .nav__ul--desktop a {
      color: #225a8c;
      border: 1px solid rgb(245, 124, 0);
      padding: 0.7rem 2rem;
      /* line-height: 1.5; */
      border-radius: 2px;
      transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1) background-color 1ms;
    }

    /* activate background color transition for desktop nav links on hover & use same background color for the current page's link in the nav */
    .nav__ul--desktop a:hover,
    .selected {
      background-color: #fef0e8;
    }
  }
</style>
