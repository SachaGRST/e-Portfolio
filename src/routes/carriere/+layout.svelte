<!-- ce layout entoure toutes les pages de /carriere/... :
     il affiche le titre de la section, le bouton LinkedIn et la barre de sous-onglets -->

<script lang="ts">
    import type { LayoutProps } from './$types';
    import Onglets from '#lib/components/Onglets.svelte';
    import { sections } from '#lib/navigation.ts';
    import { t } from '#lib/langue.svelte.ts';
    import { infos } from '#lib/infos.ts';

    let { children }: LayoutProps = $props();

    const section = sections.carriere;
</script>

<div class="titre">
    <h1>{t(section.titre)}</h1>
    <!-- le même bouton que sur la page d'accueil (classes de base.css) -->
    <a class="bouton bouton-secondaire" href={infos.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
</div>

<Onglets onglets={section.onglets} />

{@render children()}

<style>
    /* le titre à gauche, le bouton à droite ; le bouton passe dessous sur petit écran */
    .titre {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        gap: var(--size-medium);
        margin-bottom: var(--size-big);
    }

    h1 {
        margin: 0;
    }
</style>
