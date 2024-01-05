<script context="module">
  export async function preload({ params, query }) {
    return this.fetch(`order-online.json`)
      .then((r) => r.json())
      .then((page) => {
        return { page };
      });
  }
</script>

<script>
  import Card from "./../../components/Card.svelte";

  export let page;

  const [metadata] = page;
</script>

<article class="page-content">
  <!-- {JSON.stringify(page, null, 2)} -->
  <Card>
    <div class="center">
      <div class="stack">
        <div>
          <h1>{metadata.title}</h1>
        </div>
        <p>Order for pickup or delivery by clicking one of the options below</p>
        <ul class="cluster">
          {#each metadata.options as item}
            <li>
              <a href={item.link.href}>{item.link.text}</a>
            </li>
          {/each}

          <!-- <a href={metadata.options.delivery1.link}
            >{metadata.options.delivery1.text}</a
          > -->
        </ul>
      </div>
    </div>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
  </Card>
</article>

<style>
  a {
    display: block;
    /* min-height: 100%; */
    text-decoration: none;
    border: 1px solid rgb(245, 124, 0);
    /* width: 7rem; */
    color: #225a8c;
    padding: 0.6rem 0.4rem;
    margin-top: 0.7rem;
    border-radius: 2px;
    background-color: #fff;
    transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1) background-color 1ms;
  }

  a:hover {
    background-color: #fef0e8;
  }

  div {
    margin: 0 auto;
    text-align: center;
  }

  ul {
    margin: 0 auto;
  }

  li {
    flex: 1 1 0;
  }

  .center {
    box-sizing: content-box;
    margin-inline: auto;
  }

  .stack {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  .stack > * {
    margin-block: 0;
  }

  .stack > * + * {
    margin-block-start: 2rem;
  }

  .cluster {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space, 1.5rem);
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
  }
</style>
