<!--
    Le haut de page : ton nom, le menu, et le bouton de langue FR / EN.
    Sur petit écran, le menu se cache derrière un bouton « burger » (☰).
    Les liens du menu viennent de src/lib/navigation.ts.
-->

<script lang="ts">
    import { page } from '$app/state';
    import { afterNavigate } from '$app/navigation';
    import { menu, lien, routeActive } from '#lib/navigation.ts';
    import { langue, t, choisirLangue } from '#lib/langue.svelte.ts';
    import { infos } from '#lib/infos.ts';

    // le menu est-il ouvert ? (utile seulement sur petit écran)
    // $state : quand la valeur change, l'affichage se met à jour
    let menuOuvert = $state(false);

    // referme le menu après chaque changement de page
    afterNavigate(() => {
        menuOuvert = false;
    });

    // la section de la page actuelle, pour la mettre en bleu dans le menu
    const active = $derived(routeActive(menu.map((section) => section.route), page.route.id));
</script>

<header>
    <div class="interieur">
        <a class="nom" href={lien('/')}>{infos.nom}</a>

        <!-- class:ouvert ajoute la classe "ouvert" quand menuOuvert vaut true -->
        <nav id="menu-principal" class:ouvert={menuOuvert}>
            {#each menu as section (section.route)}
                <a href={lien(section.route)} aria-current={section.route === active ? 'page' : undefined}>
                    {t(section.menu)}
                </a>
            {/each}
        </nav>

        <!-- aria-pressed indique quel bouton est actif (le CSS s'en sert aussi pour le colorer) -->
        <div class="langues" role="group" aria-label="Langue / Language">
            <button aria-pressed={langue.actuelle === 'fr'} onclick={() => choisirLangue('fr')}>FR</button>
            <button aria-pressed={langue.actuelle === 'en'} onclick={() => choisirLangue('en')}>EN</button>
        </div>

        <button
            class="burger"
            aria-label="Menu"
            aria-expanded={menuOuvert}
            aria-controls="menu-principal"
            onclick={() => (menuOuvert = !menuOuvert)}
        >
            <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
                {#if menuOuvert}
                    <!-- une croix pour fermer -->
                    <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                {:else}
                    <!-- trois traits pour ouvrir -->
                    <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                {/if}
            </svg>
        </button>
    </div>
</header>

<style>
    header {
        position: sticky;                        /* reste en haut de l'écran pendant le scroll */
        top: 0;
        z-index: 10;                             /* passe au-dessus du contenu de la page */
        background-color: rgba(255, 255, 255, 0.9);
        backdrop-filter: blur(8px);              /* floute le contenu qui passe dessous */
        border-bottom: 1px solid var(--bordure);
    }

    .interieur {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: var(--size-small) var(--size-medium);
        max-width: 1120px;
        margin: 0 auto;
        padding: 0.75rem 1.25rem;
    }

    .nom {
        margin-right: auto;                      /* pousse tout le reste vers la droite */
        color: var(--texte);
        font-size: 1.1rem;
        font-weight: 700;
        text-decoration: none;
    }

    nav {
        display: flex;
        gap: 0.25rem;
    }

    nav a {
        padding: 0.4rem 0.75rem;
        border-radius: 999px;
        color: var(--bleu);
        font-size: 0.95rem;
        font-weight: 500;
        text-decoration: none;
        white-space: nowrap;                     /* le texte d'un lien ne passe pas à la ligne */
    }

    nav a:hover {
        background-color: var(--bleu-clair);
    }

    /* la page actuelle : fond bleu, texte blanc */
    nav a[aria-current='page'] {
        background-color: var(--bleu);
        color: #ffffff;
    }

    .langues {
        display: flex;
        padding: 2px;
        border: 1px solid var(--bordure);
        border-radius: 999px;
    }

    .langues button {
        padding: 0.2rem 0.6rem;
        border: none;
        border-radius: 999px;
        background: none;
        color: var(--texte-secondaire);
        font: inherit;
        font-size: 0.8rem;
        font-weight: 600;
        cursor: pointer;
    }

    .langues button[aria-pressed='true'] {
        background-color: var(--bleu-clair);
        color: var(--bleu-fonce);
    }

    /* le bouton burger est caché sur grand écran */
    .burger {
        display: none;
        padding: 0.3rem;
        border: none;
        background: none;
        color: var(--texte);
        cursor: pointer;
    }

    /* petit écran (moins de 1000px de large) */
    @media (max-width: 1000px) {
        .burger {
            display: inline-flex;
        }

        /* le menu passe sous la barre, en colonne, et n'apparaît que s'il est ouvert */
        nav {
            display: none;
            order: 1;                            /* placé après les autres éléments */
            flex-basis: 100%;                    /* prend toute la largeur : passe à la ligne */
            flex-direction: column;
            padding-bottom: var(--size-small);
        }

        nav.ouvert {
            display: flex;
        }

        nav a {
            border-radius: 8px;
        }
    }
</style>
