// c'est une bonne pratique de déclarer ses types ici

import type { Bilingue } from '#lib/langue.svelte.ts';

// le type Projet définit les attributs d'un projet (voir src/lib/assets/projects.json)
// les attributs avec un ? sont optionnels : tu peux ne pas les écrire dans le JSON
export type Projet = {
    id: number;                         // numéro unique, utilisé dans l'adresse de la page du projet
    nom: Bilingue;                      // titre du projet
    date?: string;                      // ex : "2025" ou "Semestre 5"
    resume: Bilingue;                   // une phrase, affichée sur la carte
    description: Bilingue<string[]>;    // les paragraphes de la page du projet
    competences?: Bilingue<string[]>;   // affichées en petites étiquettes
    lien?: string;                      // lien externe (GitHub, rapport...)
};
