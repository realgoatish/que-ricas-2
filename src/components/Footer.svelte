<script>
  import Social from "./Social.svelte";

  export let socialIcons;
</script>

<footer>
  <div>
    <Social {socialIcons} stacked={false} />
    <p>&copy Que Ricas - {new Date().getFullYear()}</p>
    <p><a href="sitemap.xml">Sitemap</a></p>
  </div>
</footer>

<style>
  footer {
    background: #fff;
    border: 3px;
    border-color: #4f86f7;
    border-top-style: outset;
    /* This is from the header. Need to figure out how to get this shadow upward instead of downward */
    box-shadow: 0 2px 4px -1px rgb(0 0 0 / 20%), 0 4px 5px 0 rgb(0 0 0 / 14%),
      0 1px 10px 0 rgb(0 0 0 / 12%);
  }

  p {
    text-align: center;
  }

  div {
    padding: 2rem 0;
  }
</style>
