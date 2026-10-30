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
    <p class="a-completer">
        Présente tes actions en faveur du développement durable et ton engagement citoyen : associations,
        bénévolat, projets, ce que tu en retiens.
    </p>
</Fr>

<En>
    <p class="a-completer">Tes actions et ton engagement, en anglais.</p>
</En>
