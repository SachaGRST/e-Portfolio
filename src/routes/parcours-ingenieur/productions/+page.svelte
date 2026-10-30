<!-- Parcours ingénieur > Productions
     Une carte par production (rapport, présentation, code...).
     Pour en ajouter une : copie un bloc <article> ... </article> et modifie-le.
     Pour un lien vers un fichier (PDF...) : dépose-le dans static/, ajoute dans le <script>
     import { asset } from '$app/paths';  puis écris  href={asset('mon-fichier.pdf')} -->

<script lang="ts">
    import Fr from '#lib/components/Fr.svelte';
    import En from '#lib/components/En.svelte';
</script>

<Fr>
    <div class="grille">
        <article class="carte">
            <p class="texte-secondaire">Type · Date</p>
            <h3>Titre de la production</h3>
            <p class="a-completer">Ce que c'est, dans quel cadre tu l'as réalisée, ce qu'elle montre de tes compétences.</p>
            <a href="https://exemple.com" target="_blank" rel="noopener noreferrer">Voir la production ↗</a>
        </article>

        <article class="carte">
            <p class="texte-secondaire">Type · Date</p>
            <h3>Titre de la production</h3>
            <p class="a-completer">Ce que c'est, dans quel cadre tu l'as réalisée, ce qu'elle montre de tes compétences.</p>
            <a href="https://exemple.com" target="_blank" rel="noopener noreferrer">Voir la production ↗</a>
        </article>
    </div>
</Fr>

<En>
    <div class="grille">
        <article class="carte">
            <p class="texte-secondaire">Type · Date</p>
            <h3>Production title</h3>
            <p class="a-completer">La description de la production, en anglais.</p>
            <a href="https://exemple.com" target="_blank" rel="noopener noreferrer">View the production ↗</a>
        </article>

        <article class="carte">
            <p class="texte-secondaire">Type · Date</p>
            <h3>Production title</h3>
            <p class="a-completer">La description de la production, en anglais.</p>
            <a href="https://exemple.com" target="_blank" rel="noopener noreferrer">View the production ↗</a>
        </article>
    </div>
</En>
