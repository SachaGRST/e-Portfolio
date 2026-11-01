<!-- Carrière > Stages
     Une carte par stage. Pour en ajouter un : copie un bloc <article> ... </article> et modifie-le. -->

<script lang="ts">
    import Fr from '#lib/components/Fr.svelte';
    import En from '#lib/components/En.svelte';
</script>

<Fr>
    <div class="liste">
        <article class="carte">
            <p class="texte-secondaire">Juin 2026 · Paris</p>
            <h3>Analyse stratégique : innovation IA dans le développement
des systèmes d’information Retail & e-Commerce — Valtech</h3>
            <p class="a-completer"></p>
        </article>
    </div>
</Fr>

<En>
    <div class="liste">
        <article class="carte">
            <p class="texte-secondaire">Dates · City, country</p>
            <h3>Internship title — Company</h3>
            <p class="a-completer"></p>
        </article>
    </div>
</En>

<style>
    /* les stages les uns sous les autres */
    .liste {
        display: flex;
        flex-direction: column;
        gap: var(--size-medium);
    }
</style>
