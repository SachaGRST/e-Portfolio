<!-- ce layout entoure TOUTES les pages du site : header en haut, pied de page en bas -->
<!-- ici, définissez ce qui est commun à chaque page -->

<script lang="ts">
    // le favicon est l'icône du site, affichée dans l'onglet du navigateur
    import favicon from '#lib/assets/favicon.svg';
    import type { LayoutProps } from './$types';

    // importe le style de base, commun à tout le site
    import '#lib/styles/base.css';

    import { onMount } from 'svelte';
    import { page } from '$app/state';
    import Header from '#lib/components/Header.svelte';
    import Footer from '#lib/components/Footer.svelte';
    import { infos } from '#lib/infos.ts';
    import { titreDeLaPage } from '#lib/navigation.ts';
    import { t, restaurerLangue } from '#lib/langue.svelte.ts';

    // le children est un Snippet, il contient le contenu de la page affichée (+page.svelte)
    // il est rendu par le layout avec @render
    let { children }: LayoutProps = $props();

    // onMount : exécuté une fois, dans le navigateur, quand le site est chargé
    onMount(restaurerLangue);

    // le titre de l'onglet du navigateur, calculé à partir de src/lib/navigation.ts
    const titre = $derived(titreDeLaPage(page.route.id));
</script>

<!-- svelte:head ajoute des balises dans le <head> de la page (voir src/app.html) -->
<svelte:head>
    <link rel="icon" href={favicon} />
    <title>{titre ? `${t(titre)} · ${infos.nom}` : infos.nom}</title>
</svelte:head>

<div class="site">
    <Header />

    <main>
        {@render children()}
    </main>

    <Footer />
</div>

<style>
    /* le pied de page reste en bas de l'écran même quand la page est courte */
    .site {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }

    main {
        flex: 1;                              /* prend toute la hauteur disponible */
        width: 100%;
        max-width: var(--largeur-contenu);
        margin: 0 auto;                       /* centré horizontalement */
        padding: 2.5rem 1.25rem 4rem;
    }
</style>
