<!-- Parcours ingénieur > Compétences
     Deux parties : les compétences (rangées par catégorie) et les qualités.
     Chaque compétence ou qualité est une étiquette : <span class="tag">Nom</span>
     Pour en ajouter une : copie une ligne <span class="tag">...</span> et change le texte.
     Pour ajouter une catégorie : copie un bloc <div class="carte"> ... </div>.
     Écris dans les deux langues : une version dans <Fr>, une dans <En>. -->

<script lang="ts">
    import Fr from '#lib/components/Fr.svelte';
    import En from '#lib/components/En.svelte';
</script>

<Fr>
    <h2>Compétences</h2>

    <div class="grille">
        <div class="carte">
            <h3>Compétences techniques</h3>
            <div class="tags">
                <span class="tag">Compétence 1</span>
                <span class="tag">Compétence 2</span>
                <span class="tag">Compétence 3</span>
            </div>
        </div>

        <div class="carte">
            <h3>Compétences transversales</h3>
            <div class="tags">
                <span class="tag">Compétence 1</span>
                <span class="tag">Compétence 2</span>
                <span class="tag">Compétence 3</span>
            </div>
        </div>
    </div>

    <h2>Qualités</h2>

    <div class="tags">
        <span class="tag">Qualité 1</span>
        <span class="tag">Qualité 2</span>
        <span class="tag">Qualité 3</span>
    </div>
</Fr>

<En>
    <h2>Skills</h2>

    <div class="grille">
        <div class="carte">
            <h3>Technical skills</h3>
            <div class="tags">
                <span class="tag">Skill 1</span>
                <span class="tag">Skill 2</span>
                <span class="tag">Skill 3</span>
            </div>
        </div>

        <div class="carte">
            <h3>Soft skills</h3>
            <div class="tags">
                <span class="tag">Skill 1</span>
                <span class="tag">Skill 2</span>
                <span class="tag">Skill 3</span>
            </div>
        </div>
    </div>

    <h2>Qualities</h2>

    <div class="tags">
        <span class="tag">Quality 1</span>
        <span class="tag">Quality 2</span>
        <span class="tag">Quality 3</span>
    </div>
</En>

<style>
    /* les étiquettes rangées côte à côte, à la ligne quand il n'y a plus de place */
    .tags {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
    }

    /* un peu d'espace entre le titre de la catégorie et ses étiquettes */
    h3 {
        margin-bottom: var(--size-medium);
    }
</style>
