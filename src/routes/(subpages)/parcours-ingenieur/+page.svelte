<script lang="ts">
    import Button from '#lib/components/Button.svelte';
    import { resolve } from '$app/paths';
</script>

<svelte:head>
    <title>Parcours ingénieur</title>
</svelte:head>

<main>
    <h1>Parcours ingénieur</h1>

    <h2>Projets</h2>
    <p>À compléter.</p>
    <Button href={resolve('/(subpages)/projets')}>Voir mes projets</Button>

    <h2>Productions</h2>
    <p>À compléter.</p>
</main>
