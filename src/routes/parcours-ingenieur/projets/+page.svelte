<!-- Parcours ingénieur > Projets : une carte par projet de src/lib/assets/projects.json -->

<script lang="ts">
    import type { PageProps } from './$types';
    import { resolve } from '$app/paths';
    import { t } from '#lib/langue.svelte.ts';

    // les données renvoyées par +page.server.ts
    let { data }: PageProps = $props();
</script>

<div class="grille">
    {#each data.projets as projet (projet.id)}
        <!-- toute la carte est cliquable et mène à la page du projet -->
        <a class="carte" href={resolve('/parcours-ingenieur/projets/[projetId]', { projetId: String(projet.id) })}>
            {#if projet.date}
                <p class="date texte-secondaire">{projet.date}</p>
            {/if}

            <h3>{t(projet.nom)}</h3>
            <p class="texte-secondaire">{t(projet.resume)}</p>

            {#if projet.competences}
                <div class="tags">
                    {#each projet.competences as competence (competence)}
                        <span class="tag">{competence}</span>
                    {/each}
                </div>
            {/if}
        </a>
    {/each}
</div>

<style>
    .date {
        margin-bottom: 0.25rem;
        font-size: 0.85rem;
    }

    .tags {
        display: flex;
        flex-wrap: wrap;
        gap: 0.4rem;
    }
</style>
