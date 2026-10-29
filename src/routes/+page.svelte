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
    <h1>GARROUSTE Sacha</h1>

    <nav>
        <Button href={resolve('/(subpages)/parcours-ingenieur')}>Parcours ingénieur</Button>
        <Button href={resolve('/(subpages)/mobilite-internationale')}>Mobilité internationale</Button>
        <Button href={resolve('/(subpages)/developpement-durable')}>Développement durable et engagement citoyen</Button>
        <Button href={resolve('/(subpages)/sport-activites')}>Sport et autres activités</Button>
        <Button href={resolve('/(subpages)/carriere')}>Projet professionnel</Button>
    </nav>

    <Button href="projets/">Mes projets</Button>
    <Button href="CV/">Mon CV</Button>
</main>
