# Portfolio de Sacha Garrouste

Site statique construit avec SvelteKit, bilingue (français / anglais), publié sur GitHub Pages.

## Lancer le site en local

```bash
npm run dev
```

Puis ouvre l'adresse affichée (souvent http://localhost:5173). La page se met à jour à chaque enregistrement.

## Où écrire quoi

| Page | Fichier à modifier |
|---|---|
| Accueil | `src/routes/+page.svelte` |
| Parcours ingénieur > Présentation | `src/routes/parcours-ingenieur/+page.svelte` |
| Parcours ingénieur > Projets | `src/lib/assets/projects.json` (voir plus bas) |
| Parcours ingénieur > Compétences | `src/routes/parcours-ingenieur/competences/+page.svelte` |
| Mobilité internationale > Présentation | `src/routes/mobilite-internationale/+page.svelte` |
| Mobilité internationale > LV2 | `src/routes/mobilite-internationale/lv2/+page.svelte` |
| Développement durable | `src/routes/developpement-durable/+page.svelte` |
| Sport et activités | `src/routes/sport-activites/+page.svelte` |
| Carrière > Présentation | `src/routes/carriere/+page.svelte` |
| Carrière > Stage | `src/routes/carriere/stages/+page.svelte` |
| Carrière > PEP | `src/routes/carriere/pep/+page.svelte` |
| Carrière > Pitch vidéo | le texte : `src/routes/carriere/pitch/+page.svelte`, la vidéo : `src/lib/infos.ts` |
| Carrière > CV | les fichiers `static/cv-fr.pdf` et `static/cv-en.pdf` |
| Nom, lien LinkedIn, lien de la vidéo | `src/lib/infos.ts` |
| Noms des menus et sous-onglets | `src/lib/navigation.ts` |

## Remplir un texte

Les zones à remplir sont encadrées en pointillés bleus sur le site, avec la mention « À compléter ».
Dans le code, elles ont la classe `a-completer` :

```svelte
<p class="a-completer">Décris ton séjour : où, quand...</p>
```

Remplace le texte par le tien, **puis enlève `class="a-completer"`** pour que le cadre disparaisse :

```svelte
<p>J'ai effectué mon séjour à Madrid en 2025...</p>
```

Tu peux ajouter des titres (`<h2>...</h2>`, `<h3>...</h3>`) et autant de paragraphes (`<p>...</p>`) que tu veux.

## Écrire en deux langues

Chaque page contient un bloc `<Fr>` et un bloc `<En>`. Seul celui de la langue choisie s'affiche :

```svelte
<Fr>
    <p>Je suis élève ingénieur.</p>
</Fr>

<En>
    <p>I am an engineering student.</p>
</En>
```

Pour un texte court (un titre, un bouton), on utilise plutôt la fonction `t()` :

```svelte
<h2>{t({ fr: 'Mes compétences', en: 'My skills' })}</h2>
```

## Les projets

Les projets sont dans `src/lib/assets/projects.json`. Chaque projet a une carte dans l'onglet Projets
et sa propre page. Pour en ajouter un, copie un bloc `{ ... }` et change son `id` (un numéro unique) :

```json
{
    "id": 3,
    "nom": { "fr": "Robot suiveur de ligne", "en": "Line-following robot" },
    "date": "2025",
    "resume": { "fr": "Une phrase pour la carte.", "en": "One sentence for the card." },
    "description": {
        "fr": ["Premier paragraphe.", "Deuxième paragraphe."],
        "en": ["First paragraph.", "Second paragraph."]
    },
    "competences": ["C", "Électronique"],
    "lien": "https://github.com/..."
}
```

`date`, `competences` et `lien` sont optionnels. Attention aux virgules entre les blocs et aux guillemets :
si le JSON est mal écrit, `npm run check` le signale.

## CV, LinkedIn et photo

- **CV** : deux fichiers, `static/cv-fr.pdf` (français) et `static/cv-en.pdf` (anglais). Le site affiche
  et propose au téléchargement celui de la langue choisie. Pour mettre à jour un CV, remplace le fichier
  en gardant exactement le même nom. `cv-en.pdf` est pour l'instant un CV provisoire.
- **Pitch vidéo** : mets la vidéo sur YouTube en « non répertoriée », puis colle son lien dans
  `pitchYoutube` de `src/lib/infos.ts`. La vidéo s'affiche dans l'onglet Carrière > Pitch vidéo.
- **LinkedIn** : change l'adresse dans `src/lib/infos.ts`.
- **Photo** : dépose ta photo dans `src/lib/assets/` (par exemple `photo.jpg`) et suis les 3 étapes
  écrites en commentaire en haut de `src/routes/+page.svelte`.

## Renommer un menu ou ajouter un sous-onglet

Tout est dans `src/lib/navigation.ts` :

- **Renommer** : change le texte `menu` (affiché dans le header) ou `titre` (affiché sur la page).
- **Ajouter un sous-onglet**, par exemple « Semestre à l'étranger » dans Mobilité internationale :
  1. crée le dossier `src/routes/mobilite-internationale/semestre/` avec un fichier `+page.svelte`
     (copie celui de `lv2/` comme modèle) ;
  2. ajoute une ligne dans les `onglets` de la section `mobilite` :
     ```ts
     { route: '/mobilite-internationale/semestre', titre: { fr: 'Semestre', en: 'Semester' } }
     ```

## Changer les couleurs

Les couleurs sont des variables en haut de `src/lib/styles/base.css`. Change `--bleu` et tout le site suit.

## Classes CSS disponibles

Définies dans `src/lib/styles/base.css`, utilisables dans toutes les pages :

| Classe | Effet |
|---|---|
| `carte` | bloc encadré aux coins arrondis |
| `grille` | range des cartes en colonnes automatiques |
| `bouton` | bouton bleu (sur un lien `<a>`) |
| `bouton bouton-secondaire` | bouton blanc à bordure bleue |
| `tag` | petite étiquette bleue |
| `texte-secondaire` | texte gris (dates, détails) |
| `a-completer` | cadre « À compléter » |

## Avant de rendre le portfolio

1. Plus aucun cadre « À compléter » sur le site, en français **et** en anglais (bouton FR / EN du header).
2. Tes deux vrais CV dans `static/cv-fr.pdf` et `static/cv-en.pdf`, et le lien de ta vidéo dans `src/lib/infos.ts`.
3. La page Compétences remplie en français **et** en anglais.
4. `npm run check` affiche 0 erreur, et `npm run build` se termine par « done ».

## Mettre en ligne

```bash
git add -A
git commit -m "ce que j'ai changé"
git push
```

GitHub reconstruit et publie le site automatiquement en 1 à 2 minutes (onglet **Actions** du dépôt).
