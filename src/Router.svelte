
<script lang="ts">
    import { onMount } from 'svelte'

    export let routes = {}

    let page

    onMount(() => {
        if (routes[window.location.pathname]) {
            page = routes[window.location.pathname]
        }/* else {
            page = Your404Page
        }*/
    })
</script>

<svelte:component this={page}/>
