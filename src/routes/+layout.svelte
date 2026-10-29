<!-- cette interface est lancé à chaque chargement de page -->
<!-- ici, définissez vos styles communs à chaque page -->

<script lang="ts">
    // le favicon est l'icone du site
	import favicon from '#lib/assets/favicon.svg';
	import type { LayoutProps } from './$types';

    // importe le style de base
    import '#lib/styles/base.css';

    import Button from '#lib/components/Button.svelte';
    import { resolve } from '$app/paths';

    // le children est un Snippet, il contient le code HTML, CSS, TS de la page +page.svelte
    // il peut être rendu par le layout avec @render
	let { children }: LayoutProps = $props();
</script>

<!-- svelte:head est un alias, si vous allez dans src/app.html, vous voyez son emplacement -->
<!-- il remplace %sveltekit.head% -->
<!-- c'est comme ça qu'on défini l'icone du site, dans le head -->
<!-- vous pouvez ajouter d'autres meta/links ici -->
<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<header>
    <a class="nom" href={resolve('/')}>Sacha Garrouste</a>

    <nav>
        <Button href={resolve('/')}>Accueil</Button>
        <Button href={resolve('/parcours-ingenieur')}>Ingénierie</Button>
        <Button href={resolve('/mobilite-internationale')}>Internationale</Button>
        <Button href={resolve('/developpement-durable')}>Développement durable et engagement citoyen</Button>
        <Button href={resolve('/sport-activites')}>Activités</Button>
        <Button href={resolve('/carriere')}>Projet professionnel</Button>
    </nav>
</header>

{@render children()}

<style>
    header {
        display: flex;
        justify-content: space-between; /* nom à gauche, menu à droite */
        align-items: center;
        flex-wrap: wrap;
        gap: var(--size-medium);
        padding: var(--size-medium) 2rem;
        background-color: rgb(158, 158, 158);
        position: sticky;
        top: 0;                         /* sans top, sticky ne fait rien */
        z-index: 10;                    /* reste au-dessus du contenu qui défile */
    }

    .nom {
        font-size: var(--size-big);
        font-weight: bold;
        color: inherit;
        text-decoration: none;
    }

    nav {
        display: flex;
        flex-wrap: wrap;
        gap: var(--size-medium);
        
    }
</style>

