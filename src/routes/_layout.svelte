<script>
  // export let segment

  import {layout} from '../transformers'
  const [layoutContent] = layout

  import Header from './../components/Header.svelte'

</script>

<style>
  main {
    font-size: 85%;
  }

  @media (min-width: 400px) {
    main {
      font-size: 100%;
    }
  }
</style>

<main>
  <Header {...layoutContent}/>
  <slot></slot>
</main>
