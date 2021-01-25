<script>
  export let socialIcons
  socialIcons = Object.values(socialIcons).reverse()

  // $: console.log(socialIcons)
</script>

<style>
  a {
    display: block;
    text-decoration: none;
  }

  /* we have to use this margin-left hack with justify-content:center on the container, instead of other flexbox spacing properties, because we need to have better control over spacing at small screen sizes */
  a + a {
    margin-left: 1rem;
  }

  .social-icons {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    padding: 0.5rem 1rem;
  }

</style>

<section class="social-icons">
  {#each socialIcons as icon}
    <a href={icon.link}>
      <img src={icon.image} alt={icon.altText} aria-label={icon.ariaLabel} />
    </a>
  {/each}
</section>