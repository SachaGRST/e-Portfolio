// cette page est exécutée côté serveur (ici : une seule fois, au moment du build).
// c'est ici qu'on récupère les données et qu'on les fournit au front (+page.svelte)
//
// les projets sont écrits dans src/lib/assets/projects.json :
// pour ajouter un projet, ajoute un bloc { ... } dans ce fichier
//
// pour en savoir plus : https://svelte.dev/docs/kit/load#Page-data

import type { PageServerLoad } from './$types';
import type { Projet } from '#lib/types/types.ts';
import projetsJson from '#lib/assets/projects.json';

export const load: PageServerLoad = async () => {
    const projets: Projet[] = projetsJson;

    return {
        projets
    };
};
