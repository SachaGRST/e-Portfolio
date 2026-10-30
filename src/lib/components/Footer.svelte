<!-- Le pied de page, affiché en bas de chaque page -->

<script lang="ts">
    import LiensContact from '#lib/components/LiensContact.svelte';
    import { infos } from '#lib/infos.ts';

    const annee = new Date().getFullYear();
</script>

<footer>
    <div class="interieur">
        <p>© {annee} {infos.nom}</p>
        <LiensContact compact />
    </div>
</footer>

<style>
    footer {
        border-top: 1px solid var(--bordure);
        background-color: var(--fond-secondaire);
    }

    .interieur {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        gap: var(--size-medium);
        max-width: 1120px;
        margin: 0 auto;
        padding: 1.5rem 1.25rem;
    }

    p {
        margin: 0;
        color: var(--texte-secondaire);
        font-size: 0.9rem;
    }
</style>
