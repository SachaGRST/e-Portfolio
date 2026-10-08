<script lang="ts">
    // le type renvoyé par le server +page.server.ts
    import type { PageProps } from './$types';
    import type { Projet } from '$lib/types/types';

    // les données du +page.server.ts
	let { data }: PageProps = $props();

    const projet: Projet = $derived(data.projet);
</script>

<h1>{projet.nom}</h1>

<p>{projet.description}</p>
