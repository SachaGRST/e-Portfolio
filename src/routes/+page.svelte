<script lang="ts">
    // le code typescript est exécuté au lancement de la page
    
    // importer mes composants svelte dans la page
    import Button from '#lib/components/Button.svelte';
    import { resolve } from '$app/paths';
</script>

<svelte:head>
    <title>Portfolio de Sacha Garrouste</title>
</svelte:head>


<main>
    <h1>Sacha Garrouste</h1>

    
    
    <Button href="CV/">Mon CV</Button>
</main>
