<!-- Sport et autres activités (pas de sous-onglets)
     Une carte par activité. Pour en ajouter une : copie un bloc <article> ... </article> et modifie-le. -->

<script lang="ts">
    import Fr from '#lib/components/Fr.svelte';
    import En from '#lib/components/En.svelte';
    import { sections } from '#lib/navigation.ts';
    import { t } from '#lib/langue.svelte.ts';
</script>

<h1>{t(sections.activites.titre)}</h1>

<Fr>
    <div class="grille">
        <article class="carte">
            <h3>Nom de l'activité</h3>
            <p class="a-completer">Depuis quand, à quel niveau, ce que cette activité t'apporte.</p>
        </article>

        <article class="carte">
            <h3>Nom de l'activité</h3>
            <p class="a-completer">Depuis quand, à quel niveau, ce que cette activité t'apporte.</p>
        </article>
    </div>
</Fr>

<En>
    <div class="grille">
        <article class="carte">
            <h3>Activity name</h3>
            <p class="a-completer">La description de l'activité, en anglais.</p>
        </article>

        <article class="carte">
            <h3>Activity name</h3>
            <p class="a-completer">La description de l'activité, en anglais.</p>
        </article>
    </div>
</En>
