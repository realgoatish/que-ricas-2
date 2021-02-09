<script>
  import ImageLoader from "./../components/images/ImageLoader.svelte";

  export let socialIcons;
  socialIcons = Object.values(socialIcons).reverse();

  export let stacked = true;

  $: console.log(socialIcons);
</script>

{#if stacked}
  <div class="column">
    <div class="social-icons">
      {#each socialIcons as icon, i}
        {#if i < 2}
          <a href={icon.link}>
            <ImageLoader
              src={icon.image}
              alt={icon.altText}
              aria-label={icon.ariaLabel}
              width={"24"}
              height={"24"}
            />
          </a>
        {/if}
      {/each}
    </div>
    <div class="social-icons">
      {#each socialIcons as icon, i}
        {#if i > 1}
          <a href={icon.link}>
            <ImageLoader
              src={icon.image}
              alt={icon.altText}
              aria-label={icon.ariaLabel}
              width={icon.altText === "Email icon" ? "30" : "24"}
              height={"24"}
            />
          </a>
        {/if}
      {/each}
    </div>
  </div>
{:else}
  <div class="social-icons">
    {#each socialIcons as icon, i}
      <a href={icon.link}>
        <ImageLoader
          src={icon.image}
          alt={icon.altText}
          aria-label={icon.ariaLabel}
          width={icon.altText === "Email icon" ? "30" : "24"}
          height={"24"}
        />
      </a>
    {/each}
  </div>
{/if}

<style>
  a {
    display: block;
    text-decoration: none;
  }

  /* we have to use this margin-left hack with justify-content:center on the container, instead of other flexbox spacing properties, because we need to have better control over spacing at small screen sizes */
  a + a {
    margin-left: 1rem;
  }

  .column {
    display: flex;
    flex-flow: column nowrap;
  }

  .social-icons {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    padding: 0.5rem 1rem;
  }
</style>
