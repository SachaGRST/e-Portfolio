<!--
    La barre de sous-onglets affichée sous le titre d'une section.
    Les onglets viennent de src/lib/navigation.ts.
    Utilisation : <Onglets onglets={sections.mobilite.onglets} />
-->

<script lang="ts">
    // page contient les infos de la page actuelle, dont sa route (ex : '/mobilite-internationale/pce')
    import { page } from '$app/state';
    import { lien, routeActive, type Onglet } from '#lib/navigation.ts';
    import { t } from '#lib/langue.svelte.ts';

    let { onglets }: { onglets: Onglet[] } = $props();

    // l'onglet de la page actuelle, pour le mettre en bleu
    // $derived : recalculé automatiquement quand on change de page
    const active = $derived(routeActive(onglets.map((onglet) => onglet.route), page.route.id));
</script>

<nav aria-label={t({ fr: 'Sous-sections', en: 'Subsections' })}>
    {#each onglets as onglet (onglet.route)}
        <!-- aria-current="page" indique la page actuelle (le CSS s'en sert aussi pour la colorer) -->
        <a href={lien(onglet.route)} aria-current={onglet.route === active ? 'page' : undefined}>
            {t(onglet.titre)}
        </a>
    {/each}
</nav>

<style>
    nav {
        display: flex;
        gap: 0.25rem;
        margin-bottom: 2rem;
        border-bottom: 1px solid var(--bordure);
        overflow-x: auto;              /* défile horizontalement sur petit écran */
    }

    a {
        padding: 0.6rem 0.9rem;
        margin-bottom: -1px;           /* le soulignement recouvre la bordure grise de la barre */
        border-bottom: 2px solid transparent;
        color: var(--texte-secondaire);
        font-weight: 500;
        text-decoration: none;
        white-space: nowrap;
    }

    a:hover {
        color: var(--bleu);
    }

    a[aria-current='page'] {
        color: var(--bleu);
        border-bottom-color: var(--bleu);
    }
</style>
