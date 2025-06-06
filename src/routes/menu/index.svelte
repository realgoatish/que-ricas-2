<script context="module">
  export async function preload({ params, query }) {
    return this.fetch(`menu.json`)
      .then((r) => r.json())
      .then((menu) => {
        return { menu };
      });
  }
</script>

<script>
  import { stores } from "@sapper/app";
  import BaseSEO from "../../components/BaseSEO.svelte";
  import Card from "../../components/Card.svelte";
  import MenuSection from "../../components/MenuSection.svelte";
  import { currentSection } from "../../_helpers/stores";
  import { elementScrollIntoViewPolyfill } from "seamless-scroll-polyfill";
  import { onMount } from "svelte";

  export let menu;

  onMount(() => {
    elementScrollIntoViewPolyfill();
  });

  $: console.log(
    `menu data on arrival in front end: ${JSON.stringify(menu, null, 2)}`
  );

  const { page } = stores();

  function scrollToSection() {
    let test = setInterval(function () {
      if (document.querySelector("div.visible-block")) {
        document
          .querySelector("div.visible-block")
          .scrollIntoView({ behavior: "smooth" });
        clearInterval(test);
      }
    }, 100);
  }

  function showMenuSection() {
    currentSection.update((section) => this.value);
    scrollToSection();
  }
</script>

<BaseSEO
  title="Menu"
  description="Our menu features empanadas, arepas, pabellon bowls, churros, local specialties, lunch specials, gluten free and vegan options"
  canonical={`https://www.que-ricas.com${$page.path}`}
  image={menu.seo.image}
  imageExtension={"jpg"}
  altText={menu.seo.altText}
/>

<article class="page-content">
  <Card stretch={$currentSection}>
    <h1>Our Menu</h1>
    <p>Click on each section below to view items</p>
    <section>
      {#each menu.titles as title}
        <button
          aria-label={`Click to reveal menu items from the ${title} section below`}
          class:selected={$currentSection === title}
          on:click={showMenuSection}
          value={title}>{title}</button
        >
      {/each}
      <!-- {#each menu as item (item.number)}
        <button
          aria-label={`Click to reveal menu items from the ${item.title} section below`}
          class:selected={$currentSection === item.title}
          on:click={showMenuSection}
          value={item.title}>{item.title}</button
        >
      {/each} -->
    </section>
  </Card>
  <div class:visible-block={$currentSection !== 0}>
    <Card>
      <MenuSection info={menu.sections.starters} />
      <MenuSection info={menu.sections.empanadas} />
      <MenuSection info={menu.sections.fromTheGriddle} />
      <MenuSection info={menu.sections.arepas} />
      <MenuSection info={menu.sections.tacos} />
      <MenuSection info={menu.sections.platters} />
      <MenuSection info={menu.sections.churros} />
      <MenuSection info={menu.sections.sidesAndExtras} />
      <MenuSection info={menu.sections.drinks} />
    </Card>
  </div>
</article>

<style>
  div {
    display: none;
  }

  .visible-block {
    display: block;
  }

  section {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
  }

  h1,
  p {
    text-align: center;
  }
  button {
    border: 1px solid rgb(245, 124, 0);
    width: 7rem;
    color: #225a8c;
    padding: 0.6rem 0.4rem;
    margin-top: 0.7rem;
    border-radius: 2px;
    background-color: #fff;
    transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1) background-color 1ms;
  }

  button:hover {
    background-color: #fef0e8;
  }

  .selected {
    background-color: #fef0e8;
  }

  @media (min-width: 400px) {
    button {
      width: 10rem;
    }
  }
</style>
