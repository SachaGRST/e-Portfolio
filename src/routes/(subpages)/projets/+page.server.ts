// cette page est exécutée côté serveur.
// c'est ici qu'on récupère les données et qu'on les fournit au front (+page.svelte)
//
// cette page sert à load le json dans assets et retourner les projets correspondants
// c'est une bonne pratique de faire les chargements de données dans les pages serveur
// c'est même indispensable si vous utilisez une DB (ici, c'est pas notre cas)
//
// pour en savoir plus : https://svelte.dev/docs/kit/load#Page-data

import type { PageServerLoad } from './$types';
import type { Projet } from '#lib/types/types';
import projetsJson from '#lib/assets/projects.json';

export const load: PageServerLoad = async () => {
    const projets: Projet[] = projetsJson;

	return {
        projets
	};
};
