<!-- ce layout entoure toutes les pages de /carriere/... :
     il affiche le titre de la section et la barre de sous-onglets -->

<script lang="ts">
    import type { LayoutProps } from './$types';
    import Onglets from '#lib/components/Onglets.svelte';
    import { sections } from '#lib/navigation.ts';
    import { t } from '#lib/langue.svelte.ts';

    let { children }: LayoutProps = $props();

    const section = sections.carriere;
</script>

<h1>{t(section.titre)}</h1>
<Onglets onglets={section.onglets} />

{@render children()}
