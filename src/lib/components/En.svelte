<!--
    Affiche son contenu uniquement quand le site est en anglais.
    Utilisation :
        <En>
            <p>Hello!</p>
        </En>
-->

<script lang="ts">
    import type { Snippet } from 'svelte';
    import { langue } from '#lib/langue.svelte.ts';

    // children : tout ce qui est écrit entre <En> et </En>
    let { children }: { children: Snippet } = $props();
</script>

{#if langue.actuelle === 'en'}
    {@render children()}
{/if}
