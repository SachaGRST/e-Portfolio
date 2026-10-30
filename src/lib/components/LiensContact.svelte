<!--
    Les liens LinkedIn et CV, affichés sur l'accueil (en boutons)
    et dans le pied de page (en petit texte, avec compact).
    Utilisation : <LiensContact /> ou <LiensContact compact />
-->

<script lang="ts">
    // asset() donne le bon chemin vers un fichier du dossier static/ (ici static/cv.pdf)
    import { asset } from '$app/paths';
    import { infos } from '#lib/infos.ts';
    import { t } from '#lib/langue.svelte.ts';

    let { compact = false }: { compact?: boolean } = $props();

    // en version compacte, de simples liens ; sinon, des boutons (classes de base.css)
    const classe = $derived(compact ? 'lien-simple' : 'bouton bouton-secondaire');
</script>

<div class="liens">
    <!-- target="_blank" ouvre LinkedIn dans un nouvel onglet -->
    <a class={classe} href={infos.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>

    <!-- download : le navigateur télécharge le fichier au lieu de l'ouvrir, sous ce nom -->
    <a class={classe} href={asset('CV GARROUSTE Sacha.pdf')} download="CV-{infos.nom.replace(' ', '-')}.pdf">
        {t({ fr: 'Télécharger mon CV', en: 'Download my CV' })} ↓
    </a>
</div>

<style>
    .liens {
        display: flex;
        flex-wrap: wrap;
        gap: var(--size-small) var(--size-medium);
    }

    .lien-simple {
        color: var(--texte-secondaire);
        text-decoration: none;
        font-size: 0.9rem;
    }

    .lien-simple:hover {
        color: var(--bleu);
    }
</style>
