<!-- Parcours ingénieur > Projets > la page d'un projet -->

<script lang="ts">
    import type { PageProps } from './$types';
    import { resolve } from '$app/paths';
    import { t } from '#lib/langue.svelte.ts';

    // les données renvoyées par +page.server.ts
    let { data }: PageProps = $props();

    const projet = $derived(data.projet);
</script>

<a class="retour" href={resolve('/parcours-ingenieur/projets')}>
    ← {t({ fr: 'Tous les projets', en: 'All projects' })}
</a>

<h2>{t(projet.nom)}</h2>

{#if projet.date}
    <p class="texte-secondaire">{projet.date}</p>
{/if}

{#if projet.competences}
    <div class="tags">
        {#each t(projet.competences) as competence (competence)}
            <span class="tag">{competence}</span>
        {/each}
    </div>
{/if}

<!-- un paragraphe <p> par texte de la liste "description" du JSON -->
{#each t(projet.description) as paragraphe, i (i)}
    <p>{paragraphe}</p>
{/each}

<!-- le bouton n'apparaît que si "lien" n'est pas vide dans le JSON -->
{#if projet.lien}
    <a class="bouton" href={projet.lien} target="_blank" rel="noopener noreferrer">
        {t({ fr: 'Voir le projet', en: 'View the project' })} ↗
    </a>
{/if}

<style>
    .retour {
        font-size: 0.9rem;
        text-decoration: none;
    }

    h2 {
        margin-top: var(--size-medium);
        margin-bottom: var(--size-small);
    }

    .tags {
        display: flex;
        flex-wrap: wrap;
        gap: 0.4rem;
        margin-bottom: var(--size-big);
    }
</style>
