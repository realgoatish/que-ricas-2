<script>

  import ImageLoader from './images/ImageLoader.svelte'
  import Nav from './Nav.svelte'
  import Social from './Social.svelte'

  // Declare props to "catch" properties of the prop object we passed in via _layout.svelte (parent component)
  export let logo
  export let socialIcons
  export let contactInfo
  export let businessHours
  // export let nav

  $: console.log(businessHours)

</script>

<style>

  header {
    background: #fff;
    border-bottom-style: outset;
    border-color: #4f86f7;
  }

  section.container {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
  }

  .header__logo-social-contact {
    display: flex;
    flex-direction: column;
    width: 65%;
    /* max-width:  */
  }

  /* :global(header p) {
    margin: 0;
    text-align: center;
  }

  :global(header p, header a) {
    font-size: 85%;
  } */

  @media (min-width: 400px) {

    .header__logo-social-contact {
      width: 14rem;
    }

    /* :global(header p, header a) {
      font-size: 100%;
    } */
  }

</style>

<header class="section-wrapper">
  <section class="container">
    <section class="header__logo-social-contact">
      <ImageLoader src={logo.image} alt={logo.altText}/>
      <Social {socialIcons}/>
      <section class="header__contact-hours">
        <p>{contactInfo.phoneNumber}</p>
        <p>{contactInfo.streetAddress},</p>
        <p>{contactInfo.city}, {contactInfo.state} {contactInfo.zip}</p>
        {#each businessHours as item}
          <p>{item}</p>
        {/each}
      </section>


    </section>

    <section class="header-nav">
      <Nav />
    </section>
  </section>
</header>

