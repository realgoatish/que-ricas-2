<script>
  import Social from "./Social.svelte";

  export let socialIcons;
</script>

<footer>
  <Social {socialIcons} />
</footer>

<style>
  footer {
    border: 3px;
    border-color: #4f86f7;
    border-top-style: outset;
    /* This is from the header. Need to figure out how to get this shadow upward instead of downward */
    box-shadow: 0 2px 4px -1px rgb(0 0 0 / 20%), 0 4px 5px 0 rgb(0 0 0 / 14%),
      0 1px 10px 0 rgb(0 0 0 / 12%);
  }
</style>
