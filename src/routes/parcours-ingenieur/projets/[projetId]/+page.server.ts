// cette page est exécutée côté serveur (ici : au moment du build, une fois par projet).
// c'est ici qu'on récupère les données et qu'on les fournit au front (+page.svelte)

import type { PageServerLoad } from './$types';
import type { Projet } from '#lib/types/types.ts';
import projets from '#lib/assets/projects.json';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ params }) => {
    // params récupère la variable [projetId] de l'adresse (ex : /parcours-ingenieur/projets/2 → "2")
    const id: number = Number(params.projetId);

    // recherche du projet par id dans le JSON
    const projet: Projet | undefined = projets.find((p: Projet) => p.id === id);

    // si le projet n'existe pas, on renvoie une erreur 404
    if (!projet) {
        error(404, 'Projet introuvable');
    }

    return {
        projet
    };
};
