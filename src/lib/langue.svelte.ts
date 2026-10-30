// Gestion de la langue du site (français / anglais).
//
// Ce fichier se termine par .svelte.ts : c'est ce qui permet d'utiliser $state en dehors
// d'un composant. La variable `langue` est donc partagée par tout le site : dès qu'elle
// change (bouton FR / EN du header), tous les textes affichés se mettent à jour.

export type Langue = 'fr' | 'en';

// un texte écrit dans les deux langues, ex : { fr: 'Bonjour', en: 'Hello' }
// <T = string> : par défaut ce sont des textes, mais on peut aussi traduire
// autre chose, comme une liste de paragraphes (Bilingue<string[]>)
export type Bilingue<T = string> = { fr: T; en: T };

// la langue affichée ; le site est en français par défaut
export const langue = $state({ actuelle: 'fr' as Langue });

// renvoie la version du texte dans la langue actuelle
// exemple : t({ fr: 'Bonjour', en: 'Hello' }) donne 'Bonjour' ou 'Hello'
export function t<T>(texte: Bilingue<T>): T {
    return texte[langue.actuelle];
}

export function choisirLangue(nouvelle: Langue) {
    langue.actuelle = nouvelle;

    // indique la langue au navigateur (utile pour les lecteurs d'écran et la traduction automatique)
    document.documentElement.lang = nouvelle;

    // retient le choix pour la prochaine visite
    try {
        localStorage.setItem('langue', nouvelle);
    } catch {
        // le navigateur peut bloquer le stockage (navigation privée) : ce n'est pas grave
    }
}

// appelée au chargement du site : remet la langue choisie lors de la visite précédente
export function restaurerLangue() {
    try {
        const sauvegardee = localStorage.getItem('langue');
        if (sauvegardee === 'fr' || sauvegardee === 'en') {
            choisirLangue(sauvegardee);
        }
    } catch {
        // pas de stockage disponible : on reste en français
    }
}
