<!-- Carrière > Stages
     Une carte par stage. Pour en ajouter un : copie un bloc <article> ... </article> et modifie-le. -->

<script lang="ts">
    import Fr from '#lib/components/Fr.svelte';
    import En from '#lib/components/En.svelte';
</script>

<Fr>
    <div class="liste">
        <article class="carte">
            <p class="texte-secondaire">Dates · Ville, pays</p>
            <h3>Intitulé du stage — Entreprise</h3>
            <p class="a-completer">Tes missions, les compétences développées, ce que tu retiens de ce stage.</p>
        </article>
    </div>
</Fr>

<En>
    <div class="liste">
        <article class="carte">
            <p class="texte-secondaire">Dates · City, country</p>
            <h3>Internship title — Company</h3>
            <p class="a-completer">La description du stage, en anglais.</p>
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
