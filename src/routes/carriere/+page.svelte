<!-- Carrière > Stage (première page de Carrière, à l adresse /carriere)
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
            <p>
                Stage « Intégration de l'IA dans l'IT » réalisé chez Valtech, cabinet international de conseil en
                transformation digitale. J'y ai mené une analyse stratégique : comment l'intelligence artificielle
                transforme le développement des systèmes d'information dans le commerce et l'e-commerce.
            </p>
        </article>
    </div>
</Fr>

<En>
    <div class="liste">
        <article class="carte">
            <p class="texte-secondaire">June 2026 · Paris</p>
            <h3>Strategic analysis: AI innovation in Retail & e-Commerce information systems development — Valtech</h3>
            <p>
                "AI Integration in IT" internship at Valtech, an international digital transformation consultancy.
                I carried out a strategic analysis of how artificial intelligence is transforming the development of
                information systems in retail and e-commerce.
            </p>
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
