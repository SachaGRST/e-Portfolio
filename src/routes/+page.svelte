<script lang="ts">
    // le code typescript est exécuté au lancement de la page
    
    // importer mes composants svelte dans la page
    import Button from '$lib/components/Button.svelte';
</script>

<main>
    <h1>Mon super eportfolio</h1>

    <Button href="projets/">Mes projets</Button>
    <Button variante="transparent">Mon CV</Button>

</main>
