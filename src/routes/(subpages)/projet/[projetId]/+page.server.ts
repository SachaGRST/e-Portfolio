// cette page est exécutée côté serveur.
// c'est ici qu'on récupère les données et qu'on les fournit au front (+page.svelte)

import type { PageServerLoad } from './$types';
import type { Projet } from '$lib/types/types';
import projects from '$lib/assets/projects.json';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ params }) => {

    // params récupère la variable [projetId]
    const id: number = Number(params.projetId);

    // Recherche du projet par ID dans le JSON
    const projet: Projet | undefined = projects.find((p: Projet) => p.id === id);

    // Si le projet n'existe pas, on renvoie une erreur 404
    if (!projet) {
        throw error(404, 'Projet introuvable');
    }

    return {
        projet
    };
};
