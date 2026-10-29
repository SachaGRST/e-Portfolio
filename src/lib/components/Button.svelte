<script lang="ts">
    import type { Snippet } from "svelte";


    // c'est une bonne pratique de définir le type attendu en input du composant
    interface Props {
        variante?: 'normale' | 'transparent'; // le point d'interrogation signifie optionel
        href?: string;
        children: Snippet; // un children contient toutes les balises contenues dans le composant
    }

    // Ces variables sont les inputs du composant
    // On spécifie le type Props
    // Comme les noms de variables = nom des clés des dictionnaires
    // on peut raccourcir l'écriture
    let {
        variante = 'normale',
        href,
        children,
        ...rest // cette variable contient tous les autres attribus en plus. Ils seront envoyé tel quel
                // exemple : <Button style="margin-left: 2rem;">
    }: Props = $props();
</script>

<svelte:element
    this={href ? 'a' : 'button'}
    href={href ? href : undefined}
    class={`button button-${variante}`}
    {...rest}
>
    {#if children}
        {@render children()}
    {/if}
    <!-- raccourci {@render children?.()} -->
</svelte:element>

<style>
    /* style de base, appliqué à tous les boutons (classe "button") */
    .button {
        /* se place sur la ligne comme du texte, mais accepte une largeur/hauteur et du padding */
        display: inline-block;
        /* police du système (celle de l'OS), la première disponible dans la liste est utilisée */
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        /* taille du texte : celle d'un bouton natif du navigateur */
        font-size: 13.3333px;
        /* hauteur de ligne par défaut de la police */
        line-height: normal;
        /* texte centré dans le bouton */
        text-align: center;
        /* espace intérieur : 1px en haut/bas, 6px à gauche/droite */
        padding: 1px 6px;
        /* le padding et la bordure sont inclus dans la largeur du bouton */
        box-sizing: border-box;
        /* couleur du texte : celle des boutons natifs du système (mot-clé spécial) */
        color: ButtonText;
        /* couleur de fond : celle des boutons natifs du système (mot-clé spécial) */
        background-color: ButtonFace;
        /* bordure grise de 1px, trait plein */
        border: 1px solid #767676;
        /* coins très légèrement arrondis */
        border-radius: 2px;
        /* curseur flèche normale au survol (pour une main, mettre "pointer") */
        cursor: default;
        /* empêche de sélectionner le texte du bouton à la souris */
        user-select: none;
        /* garde l'apparence native du système pour les boutons */
        appearance: auto;
        /* enlève le soulignement des liens (utile quand c'est une balise <a>) */
        text-decoration: none;
    }

    /* quand la souris passe sur le bouton */
    .button:hover {
        /* fond gris clair */
        background-color: #e1e1e1;
        /* bordure plus foncée */
        border-color: #4f4f4f;
    }

    /* pendant le clic (bouton enfoncé) */
    .button:active {
        /* fond bleu clair */
        background-color: #cce4f7;
        /* bordure bleue */
        border-color: #005499;
    }

    /* quand le bouton est sélectionné au clavier (touche Tab), mais pas au clic souris */
    .button:focus-visible {
        /* contour bleu de 2px autour du bouton, pour savoir où on est */
        outline: 2px solid #005fcc;
        /* décale le contour de 1px vers l'extérieur */
        outline-offset: 1px;
    }

    /* quand le bouton est désactivé (attribut disabled, uniquement sur la balise <button>) */
    .button:disabled {
        /* texte grisé (mot-clé spécial du système) */
        color: GrayText;
        /* fond et bordure très clairs */
        background-color: #f5f5f5;
        border-color: #d9d9d9;
        cursor: default;
    }

    /* variante "transparent" : s'applique en plus de .button quand variante="transparent" */
    .button-transparent {
        /* pas de fond */
        background-color: transparent;
        /* pas de bordure */
        border: none;
    }
</style>
