<!-- cette interface est lancé à chaque chargement de page -->
<!-- ici, définissez vos styles communs à chaque page -->

<script lang="ts">
    // le favicon est l'icone du site
	import favicon from '#lib/assets/favicon.svg';
	import type { LayoutProps } from './$types';

    // importe le style de base
    import '#lib/styles/base.css';

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

{@render children()}


