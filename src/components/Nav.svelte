<script>
  import ImageLoader from "./images/ImageLoader.svelte";
  import { clickOutside } from "./../_helpers/clickOutside";
  import { slide } from "svelte/transition";
  import { stores } from "@sapper/app";
  const { page } = stores();

  export let orderOnline;

  const navPages = [
    { linkText: "Home", route: "/" },
    { linkText: "Menu", route: "/menu/" },
    { linkText: "Our Story", route: "/story/" },
  ];

  let showMobileMenu = false;

  let hamburgerMenu

  function handleMenuClicks(event) {
    showMobileMenu = !showMobileMenu;
    if (-1 !== hamburgerMenu.className.indexOf('opened')) {
      hamburgerMenu.className = hamburgerMenu.className.replace(' opened', '')
    } else {
      hamburgerMenu.className += ' opened'
    }
  }
</script>

<nav>
  <ul class="nav__ul--desktop">
    <li>
      <a href={orderOnline.link}>{orderOnline.text}</a>
    </li>
    {#each navPages as { linkText, route }}
      <li>
        <a class:selected={$page.path === route} sapper:prefetch sapper:noscroll href={route}
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
    <button
      aria-haspopup="true"
      aria-expanded={showMobileMenu}
      aria-label="hamburger menu"
      class="menu-toggle"
      id="menu-toggle"
      bind:this={hamburgerMenu}
    >
      <svg class="icon icon-menu-toggle" aria-hidden="true" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 100">
        <g class="svg-menu-toggle">
          <path class="line line-1" d="M5 13h90v14H5z"/>
          <path class="line line-2" d="M5 43h90v14H5z"/>
          <path class="line line-3" d="M5 73h90v14H5z"/>
        </g>
      </svg>
    </button>
    {#if showMobileMenu}
      <ul class="nav__ul--mobile" in:slide>
        <li>
          <a href={orderOnline.link}>{orderOnline.text}</a>
        </li>
        {#each navPages as { linkText, route }}
          <li>
            <a sapper:prefetch sapper:noscroll href={route}>{linkText}</a>
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
    max-width: 3rem;
  }

  button {
	border: none;
	border-radius: 0;
	color: #fff;
  cursor: pointer;
	display: inline-block; 
	text-transform: uppercase;
	transition: all 0.25s ease-in-out;
}

.menu-toggle {
  font-size: 15.1627px;
}
.menu-toggle:focus {
	outline: thin dotted;
  outline-offset: -2px;
}

.icon {
	display: inline-block;
	fill: #000;
	height: 1em;
	width: 1em;
	vertical-align: middle;
	position: relative;
	top: -0.0625em;
}

/* Menu toggle styles. */

.icon-menu-toggle {
	width: 3em;
	height: 3em;
  top: 0;
}

/* Animate menu icon (lines). */
.svg-menu-toggle .line {
  opacity: 1;
  transform: rotate(0) translateY(0) translateX(0);
  transform-origin: 1em 1em;
  transition: transform 0.3s ease-in-out, opacity 0.2s ease-in-out;
}
.svg-menu-toggle .line-1 {
  transform-origin: 1em 2.5em;

}
.svg-menu-toggle .line-3 {
  transform-origin: 1em 4.5em;
}

.menu-toggle.opened .svg-menu-toggle .line-1 {
  transform: rotate(45deg) translateY(0) translateX(0);
}
.menu-toggle.opened .svg-menu-toggle .line-2 {
  opacity: 0;
}
.menu-toggle.opened .svg-menu-toggle .line-3 {
  transform: rotate(-45deg) translateY(0em) translateX(0em);
}

  .nav__ul--desktop {
    display: none;
  }

  .nav__section--mobile {
    display: flex;
    flex-flow: column nowrap;
    padding-top: 1rem;
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
