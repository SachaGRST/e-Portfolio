<!-- page affichée quand une adresse n'existe pas (erreur 404) ou en cas d'erreur -->

<script lang="ts">
    import { page } from '$app/state';
    import { lien } from '#lib/navigation.ts';
    import { t } from '#lib/langue.svelte.ts';
</script>

<p class="texte-secondaire">{t({ fr: 'Erreur', en: 'Error' })} {page.status}</p>

<h1>
    {#if page.status === 404}
        {t({ fr: 'Cette page n’existe pas', en: 'This page does not exist' })}
    {:else}
        {t({ fr: 'Une erreur est survenue', en: 'Something went wrong' })}
    {/if}
</h1>

<a class="bouton" href={lien('/')}>{t({ fr: 'Retour à l’accueil', en: 'Back to home' })}</a>
