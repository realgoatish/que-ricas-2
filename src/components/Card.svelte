<div class="section-wrapper">
  <div class="container">
    <slot />
  </div>
</div>

<style>
  .section-wrapper {
    background: #fff;
  }

  .container {
    background: #fff;
    /* display: */
  }

  @media (min-width: 960px) {
    .section-wrapper {
      background: inherit;
      border: none;
      box-shadow: none;
    }

    .container {
      padding: 1rem;
      border: 1px solid #aaa;
      border-radius: 2px;
      box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
    }
  }
</style>
