<script>
  export let socialIcons;
  socialIcons = Object.values(socialIcons).reverse();

  // $: console.log(socialIcons)
</script>

<div class="column">
  <div class="social-icons">
    {#each socialIcons as icon, i}
      {#if i < 2}
        <a href={icon.link}>
          <img
            src={icon.image}
            alt={icon.altText}
            aria-label={icon.ariaLabel}
          />
        </a>
      {/if}
    {/each}
  </div>
  <div class="social-icons">
    {#each socialIcons as icon, i}
      {#if i > 1}
        <a href={icon.link}>
          <img
            src={icon.image}
            alt={icon.altText}
            aria-label={icon.ariaLabel}
          />
        </a>
      {/if}
    {/each}
  </div>
  <!-- {#each socialIcons as other, i}
    {#if i > 1}
      <div class="social-icons">
        <a href={other.link}>
          <img
            src={other.image}
            alt={other.altText}
            aria-label={other.ariaLabel}
          />
        </a>
      </div>
    {/if}
  {/each} -->
</div>

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
