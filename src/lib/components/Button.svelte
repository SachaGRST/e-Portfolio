<script lang="ts">
    // ce type contient du contenue HTML
    import type { Snippet } from '$types';

    // c'est une bonne pratique de définir le type attendue en input du composant
    interface Props {
        variante?: 'normale' | 'transparent'; // le point d'interrogation signifie optionel
        href?: string;
        children: Snippet; // un children contient toutes les balises intérieurs au celle là
    }

    // Ces variables sont les inputs du composant
    // On spécifie le type Props
    // Comme les noms de variables = nom des clés des dictionnaires
    // on peut raccourcir l'écriture
    let {
        variante = 'normale',
        href,
        children
    }: Props = $props();
</script>

<svelte:element
    this={href ? 'a' : 'button'}
    href={href ? href : undefined}
    class={`button button-${variante}`}
>
    {#if children}
        {@render children()}
    {/if}
    <!-- raccourci {@render children?.()} -->
</svelte:element>

<style>
    .button {
        display: inline-block;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        font-size: 13.3333px;
        line-height: normal;
        text-align: center;
        padding: 1px 6px;
        box-sizing: border-box;
        color: ButtonText;
        background-color: ButtonFace;
        border: 1px solid #767676;
        border-radius: 2px;
        cursor: default;
        user-select: none;
        appearance: auto;
        text-decoration: none;
    }

    .button:hover {
        background-color: #e1e1e1;
        border-color: #4f4f4f;
    }

    .button:active {
        background-color: #cce4f7;
        border-color: #005499;
    }

    .button:focus-visible {
        outline: 2px solid #005fcc;
        outline-offset: 1px;
    }

    .button:disabled {
        color: GrayText;
        background-color: #f5f5f5;
        border-color: #d9d9d9;
        cursor: default;
    }

    .button-transparent {
        background-color: transparent;
        border: none;
    }
</style>
