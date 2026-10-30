<!-- Carrière > Pitch vidéo
     La vidéo vient de YouTube : colle son lien dans src/lib/infos.ts (pitchYoutube).
     Mets-la en « non répertoriée » sur YouTube : seules les personnes qui ont le lien peuvent la voir. -->

<script lang="ts">
    import Fr from '#lib/components/Fr.svelte';
    import En from '#lib/components/En.svelte';
    import { infos } from '#lib/infos.ts';

    // un lien YouTube contient un identifiant de 11 caractères (ex : youtu.be/abcdefghijk) ;
    // on le récupère pour construire l'adresse du lecteur intégré
    const idVideo = infos.pitchYoutube.match(/(?:v=|youtu\.be\/|shorts\/|embed\/)([\w-]{11})/)?.[1];
</script>

<Fr>
    <p class="a-completer">
        Une ou deux phrases pour présenter ta vidéo (elle est en anglais) : ton objectif professionnel, tes 3
        modèles, tes 3 projets de mobilité internationale.
    </p>
</Fr>

<En>
    <p class="a-completer">La présentation de ta vidéo, en anglais.</p>
</En>

{#if idVideo}
    <!-- youtube-nocookie : la version de YouTube qui ne dépose pas de cookies publicitaires -->
    <iframe
        src="https://www.youtube-nocookie.com/embed/{idVideo}"
        title="Elevator pitch – {infos.nom}"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
    ></iframe>
{:else}
    <p class="a-completer">Colle le lien YouTube de ta vidéo dans src/lib/infos.ts (pitchYoutube).</p>
{/if}

<style>
    iframe {
        display: block;
        width: 100%;
        aspect-ratio: 16 / 9;          /* garde le format d'une vidéo, quelle que soit la largeur */
        border: none;
        border-radius: var(--arrondi);
    }
</style>
