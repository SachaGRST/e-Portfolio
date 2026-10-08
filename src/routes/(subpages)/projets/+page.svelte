<script lang="ts">
    import type { PageProps } from './$types';
    import type { Projet } from '$lib/types/types';

    import Button from '$lib/components/Button.svelte';

    // les données du +page.server.ts
	let { data }: PageProps = $props();

    const projets: Projet[] = $derived(data.projets);
</script>

<h1>Mes projets</h1>

<div class="flex">
    {#each projets as p}
        <div class="card">
            <h3>{p.nom}</h3>
            <p>{p.description}</p>
            <Button href={`/projet/${p.id}/`}>Voir</Button>
        </div>
    {/each}
</div>

<style>
    .flex {
        display: flex;
        flex-direction: column;
        gap: var(--size-small);
    }

    .card {
        background-color: gray;
    }
</style>
