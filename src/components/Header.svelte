<script>
  import ImageLoader from "./images/ImageLoader.svelte";
  import Nav from "./Nav.svelte";
  import Social from "./Social.svelte";

  // Declare props to "catch" properties of the prop object we passed in via _layout.svelte (parent component)
  export let logo;
  export let socialIcons;
  export let orderOnline;
  export let contactInfo;
  export let businessHours;
</script>

<header class="section-wrapper">
  <div class="container">
    <div class="header__logo-social-contact">
      <ImageLoader
        src={logo.image}
        alt={logo.altText}
        width={"217"}
        height={"53"}
      />
      <Social {socialIcons} />
      <div class="header__contact-hours">
        <p>
          <a class="link__order-online" href={orderOnline.link}
            >{orderOnline.text}!</a
          >
        </p>
        <p>{contactInfo.phoneNumber}</p>
        <p>{contactInfo.streetAddress},</p>
        <p>{contactInfo.city}, {contactInfo.state} {contactInfo.zip}</p>
        {#each businessHours as item}
          <p>{item}</p>
        {/each}
      </div>
    </div>

    <div class="header-nav">
      <Nav {orderOnline} />
    </div>
  </div>
</header>

<style>
  header {
    background: #fff;
    border: 3px;
    border-color: #4f86f7;
    border-bottom-style: outset;
    box-shadow: 0 2px 4px -1px rgb(0 0 0 / 20%), 0 4px 5px 0 rgb(0 0 0 / 14%),
      0 1px 10px 0 rgb(0 0 0 / 12%);
  }

  div.container {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
  }

  .header__logo-social-contact {
    display: flex;
    flex-direction: column;
    width: 60%;
  }

  .link__order-online {
    color: #3271ab;
    text-decoration: underline;
  }

  @media (min-width: 400px) {
    .header__logo-social-contact {
      width: 14rem;
    }
  }
</style>
