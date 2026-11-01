<!-- Développement durable et engagement citoyen (pas de sous-onglets)
     Tu peux ajouter des titres avec <h2>...</h2> et autant de paragraphes <p>...</p> que tu veux. -->

<script lang="ts">
    import Fr from '#lib/components/Fr.svelte';
    import En from '#lib/components/En.svelte';
    import { sections } from '#lib/navigation.ts';
    import { t } from '#lib/langue.svelte.ts';
</script>

<h1>{t(sections.engagement.titre)}</h1>

<Fr>
    <p class="a-completer"></p>
</Fr>

<En>
    <p class="a-completer"></p>
</En>
