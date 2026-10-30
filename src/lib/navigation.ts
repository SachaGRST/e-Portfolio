// Ce fichier décrit la navigation du site. Le menu du header, les sous-onglets,
// les cartes de la page d'accueil et le titre des onglets du navigateur sont
// tous construits à partir d'ici.
//
// - Pour renommer un onglet : change son texte ci-dessous.
// - Pour ajouter un sous-onglet : ajoute une ligne dans `onglets`, ET crée le dossier
//   correspondant dans src/routes/ avec un fichier +page.svelte dedans.

import type { RouteId } from '$app/types';
import { resolve } from '$app/paths';
import type { Bilingue } from '#lib/langue.svelte.ts';

// toutes les routes du site (= les dossiers de src/routes), sauf celles qui ont
// un paramètre comme [projetId]. Si tu écris une route qui n'existe pas, `npm run check` te le dira.
type Route = Exclude<RouteId, `${string}[${string}`>;

export type Onglet = {
    route: Route;
    titre: Bilingue;
};

export type Section = {
    route: Route;
    menu: Bilingue;         // texte court, affiché dans le menu du header
    titre: Bilingue;        // titre complet, affiché en haut de la page
    description: Bilingue;  // phrase affichée sur la carte de la page d'accueil
    onglets?: Onglet[];     // sous-onglets (optionnel)
};

// `satisfies` vérifie que chaque section respecte bien le type Section
export const sections = {
    accueil: {
        route: '/',
        menu: { fr: 'Accueil', en: 'Welcome' },
        titre: { fr: 'Accueil', en: 'Welcome' },
        description: { fr: '', en: '' }
    },
    parcours: {
        route: '/parcours-ingenieur',
        menu: { fr: 'Ingénierie', en: 'Engineering' },
        titre: { fr: 'Parcours ingénieur', en: 'Engineering course' },
        description: {
            fr: "Ma formation d'ingénieur, mes projets et mes compétences.",
            en: 'My engineering studies, projects and skills.'
        },
        onglets: [
            { route: '/parcours-ingenieur', titre: { fr: 'Présentation', en: 'Overview' } },
            { route: '/parcours-ingenieur/projets', titre: { fr: 'Projets', en: 'Projects' } },
            { route: '/parcours-ingenieur/competences', titre: { fr: 'Compétences', en: 'Skills' } }
        ]
    },
    mobilite: {
        route: '/mobilite-internationale',
        menu: { fr: 'International', en: 'International' },
        titre: { fr: 'Mobilité internationale', en: 'International mobility' },
        description: {
            fr: "Mon expérience à l'international et les langues que je parle.",
            en: 'My international experience and the languages I speak.'
        },
        onglets: [
            { route: '/mobilite-internationale', titre: { fr: 'Présentation', en: 'Overview' } },
            { route: '/mobilite-internationale/lv2', titre: { fr: 'LV2', en: 'LV2' } }
        ]
    },
    engagement: {
        route: '/developpement-durable',
        menu: { fr: 'Développement durable', en: 'Sustainability' },
        titre: { fr: 'Développement durable et engagement citoyen', en: 'Sustainability & civic engagement' },
        description: {
            fr: 'Mes actions pour le développement durable et mon engagement citoyen.',
            en: 'My actions for sustainability and my civic engagement.'
        }
    },
    activites: {
        route: '/sport-activites',
        menu: { fr: 'Activités', en: 'Activities' },
        titre: { fr: 'Sport et autres activités', en: 'Sport & other activities' },
        description: {
            fr: "Le sport et les activités qui m'animent en dehors des cours.",
            en: 'The sports and activities I enjoy outside of class.'
        }
    },
    carriere: {
        route: '/carriere',
        menu: { fr: 'Carrière', en: 'Career' },
        titre: { fr: 'Projet professionnel', en: 'Career development' },
        description: {
            fr: 'Mon projet professionnel, mon stage, mon pitch vidéo et mon CV.',
            en: 'My career plans, internship, video pitch and CV.'
        },
        onglets: [
            { route: '/carriere', titre: { fr: 'Présentation', en: 'Overview' } },
            { route: '/carriere/stages', titre: { fr: 'Stage', en: 'Internship' } },
            { route: '/carriere/pep', titre: { fr: 'PEP', en: 'PEP' } },
            { route: '/carriere/pitch', titre: { fr: 'Pitch vidéo', en: 'Elevator pitch' } },
            { route: '/carriere/cv', titre: { fr: 'CV', en: 'CV' } }
        ]
    }
} satisfies Record<string, Section>;

// les sections dans l'ordre du menu
export const menu: Section[] = Object.values(sections);

// transforme une route en lien cliquable, en ajoutant le chemin de base du site
// (ex : /eportfolio sur GitHub Pages). À utiliser dans le HTML : href={lien(route)}
export function lien(route: Route): string {
    // resolve() vérifie normalement les routes écrites en dur dans le code ; ici la route
    // vient des listes ci-dessus (déjà vérifiées par le type Route), d'où le "as '/'"
    return resolve(route as '/');
}

// parmi plusieurs routes, trouve celle qui correspond à la page actuelle.
// On garde la plus précise : sur /parcours-ingenieur/projets/1, c'est
// '/parcours-ingenieur/projets' qui l'emporte sur '/parcours-ingenieur'.
export function routeActive(routes: Route[], routeActuelle: string | null): Route | undefined {
    if (!routeActuelle) return undefined;

    const correspondances = routes.filter(
        (route) => routeActuelle === route || routeActuelle.startsWith(route === '/' ? '/' : route + '/')
    );

    // la route la plus longue est la plus précise
    return correspondances.sort((a, b) => b.length - a.length)[0];
}

// le titre de la page actuelle, affiché dans l'onglet du navigateur
export function titreDeLaPage(routeActuelle: string | null): Bilingue | undefined {
    // on rassemble toutes les pages connues : les sections et leurs sous-onglets
    const pages: Onglet[] = [];
    for (const section of menu) {
        pages.push({ route: section.route, titre: section.titre });
        for (const onglet of section.onglets ?? []) {
            // l'onglet « Présentation » a la même route que sa section : on garde le titre de la section
            if (onglet.route !== section.route) pages.push(onglet);
        }
    }

    const route = routeActive(pages.map((p) => p.route), routeActuelle);
    return pages.find((p) => p.route === route)?.titre;
}
