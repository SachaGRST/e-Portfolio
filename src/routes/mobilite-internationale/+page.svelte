<!-- Mobilité internationale (pas de sous-onglets)
     Deux parties : tes 3 projets de mobilité (une carte par projet) et tes langues avec leur niveau.
     Pour remplir un projet : remplace les textes de sa carte, puis enlève class="a-completer".
     Niveaux de langue : utilise l'échelle européenne (A1, A2, B1, B2, C1, C2) ou un score de test
     (TOEIC 850, IELTS 7.0...). -->

<script lang="ts">
    import Fr from '#lib/components/Fr.svelte';
    import En from '#lib/components/En.svelte';
    import { sections } from '#lib/navigation.ts';
    import { t } from '#lib/langue.svelte.ts';
</script>

<h1>{t(sections.mobilite.titre)}</h1>

<Fr>
    <p class="a-completer">Une ou deux phrases pour présenter ton projet à l'international.</p>

    <h2>Mes 3 projets de mobilité</h2>

    <div class="grille">
        <div class="carte">
            <h3>Université 1</h3>
            <p class="texte-secondaire">Ville, pays · semestre ou année</p>
            <p class="a-completer">Pourquoi cette université : les cours, le pays, ce que ça t'apporterait.</p>
        </div>

        <div class="carte">
            <h3>Université 2</h3>
            <p class="texte-secondaire">Ville, pays · semestre ou année</p>
            <p class="a-completer">Pourquoi cette université : les cours, le pays, ce que ça t'apporterait.</p>
        </div>

        <div class="carte">
            <h3>Université 3</h3>
            <p class="texte-secondaire">Ville, pays · semestre ou année</p>
            <p class="a-completer">Pourquoi cette université : les cours, le pays, ce que ça t'apporterait.</p>
        </div>
    </div>

    <h2>Langues</h2>

    <!-- une ligne par langue : le nom à gauche, le niveau dans une étiquette à droite -->
    <ul class="carte langues">
        <li><span>Anglais (LV1)</span> <span class="tag">B2</span></li>
        <li><span>LV2 : langue</span> <span class="tag">Niveau</span></li>
    </ul>
</Fr>

<En>
    <p class="a-completer">One or two sentences introducing your international plans.</p>

    <h2>My 3 mobility projects</h2>

    <div class="grille">
        <div class="carte">
            <h3>University 1</h3>
            <p class="texte-secondaire">City, country · semester or year</p>
            <p class="a-completer">Why this university: courses, country, what it would bring you.</p>
        </div>

        <div class="carte">
            <h3>University 2</h3>
            <p class="texte-secondaire">City, country · semester or year</p>
            <p class="a-completer">Why this university: courses, country, what it would bring you.</p>
        </div>

        <div class="carte">
            <h3>University 3</h3>
            <p class="texte-secondaire">City, country · semester or year</p>
            <p class="a-completer">Why this university: courses, country, what it would bring you.</p>
        </div>
    </div>

    <h2>Languages</h2>

    <ul class="carte langues">
        <li><span>English (L1)</span> <span class="tag">B2</span></li>
        <li><span>L2: language</span> <span class="tag">Level</span></li>
    </ul>
</En>

<style>
    /* la carte des langues reste petite : elle ne prend pas toute la largeur */
    .langues {
        max-width: 360px;
        list-style: none;              /* enlève les puces */
        padding: var(--size-medium);
    }

    /* chaque ligne : la langue à gauche, le niveau poussé à droite */
    .langues li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.4rem 0;
    }

    /* un trait fin entre deux langues (sauf avant la première) */
    .langues li + li {
        border-top: 1px solid var(--bordure);
    }
</style>
