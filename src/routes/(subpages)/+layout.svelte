<!-- toutes les pages dans le sous-group (subpages) auront en plus ce layout -->

<script lang="ts">
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();

    import Button from '$lib/components/Button.svelte';
</script>

<div>
    <Button href="/">Retour</Button>
    <p><i>Ce retour est présent dans le <a href="https://git.inpt.fr/net7/eportfolio-forma/-/tree/main/src/routes/(subpages)/+layout.svelte">layout.svelte</a></i></p>
    {@render children()}
</div>
