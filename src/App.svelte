<script lang="ts">
  import './output.css'

  import Router from './Router.svelte'
  import Home from './pages/Home.svelte'
</script>

<Router
  routes={{
    '/': Home,
  }}
  />
