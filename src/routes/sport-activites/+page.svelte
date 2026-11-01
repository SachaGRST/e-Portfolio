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
            <h3>Piano</h3>
            <p>Je pratique le piano depuis que j'ai 6 ans. Jouer de la musique apporte de la créativité à ma vie. De plus jouer en groupe est une expérience sociale très enrichissante. </p>
        </article>

        <article class="carte">
            <h3>Photo</h3>
            <p>Depuis 2025, je praatique la photographie. j'aime particulièrement l'aspect technique (photo et retouche) de ce hobbie. Je fais aussi parti du club photo de l'N7</p>
        </article>

        <article class="carte">
            <h3>Course à pied</h3>
            <p>Je cours 1 à 2 fois par semaine depuis maintenant 2 ans. Ce que je préfèce, ce sont les petite distances (5km - 10km). C'est un moyen pour moi de me défouler et rester en forme.</p>
        </article>
    </div>
</Fr>

<En>
    <div class="grille">
        <article class="carte">
            <h3>Piano</h3>
            <p>I have been playing the piano since I was 6. Making music brings creativity to my life, and playing in a group is a very enriching social experience.</p>
        </article>

        <article class="carte">
            <h3>Photography</h3>
            <p>I have been doing photography since 2025. I particularly enjoy the technical side of this hobby (shooting and editing). I am also a member of the N7 photo club.</p>
        </article>

        <article class="carte">
            <h3>Running</h3>
            <p>I have been running once or twice a week for two years now. I prefer short distances (5 km - 10 km). It is a way for me to let off steam and stay fit.</p>
        </article>
    </div>
</En>
