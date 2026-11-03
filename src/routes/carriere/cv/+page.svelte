<!-- Carrière > CV
     Affiche le CV dans la langue du site : static/CV-Sacha-GARROUSTE-N7-V1.pdf en français,
     static/CV-Sacha-GARROUSTE-N7-EN.pdf en anglais.
     Pour mettre à jour un CV : remplace le fichier en gardant exactement le même nom. -->

<script lang="ts">
    import LiensContact from '#lib/components/LiensContact.svelte';
    import { asset } from '$app/paths';
    import { t } from '#lib/langue.svelte.ts';

    const cv = $derived(t({ fr: asset('CV-Sacha-GARROUSTE-N7-V1.pdf'), en: asset('CV-Sacha-GARROUSTE-N7-EN.pdf') }));
</script>

<!-- les boutons LinkedIn et téléchargement, comme sur l'accueil -->
<LiensContact />

<!-- le navigateur affiche le PDF dans ce cadre ; sur certains téléphones, il ne s'affiche pas
     et il faut passer par le bouton de téléchargement -->
<iframe src={cv} title={t({ fr: 'Mon CV', en: 'My CV' })}></iframe>

<style>
    iframe {
        display: block;
        width: 100%;
        height: 85vh;                  /* 85 % de la hauteur de l'écran */
        margin-top: var(--size-big);
        border: 1px solid var(--bordure);
        border-radius: var(--arrondi);
    }
</style>
