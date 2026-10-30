<!--
    Affiche son contenu uniquement quand le site est en français.
    Utilisation :
        <Fr>
            <p>Bonjour !</p>
        </Fr>
-->

<script lang="ts">
    import type { Snippet } from 'svelte';
    import { langue } from '#lib/langue.svelte.ts';

    // children : tout ce qui est écrit entre <Fr> et </Fr>
    let { children }: { children: Snippet } = $props();
</script>

{#if langue.actuelle === 'fr'}
    {@render children()}
{/if}
