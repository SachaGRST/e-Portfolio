<!-- page d'accueil (Welcome) -->

<script lang="ts">
    import Fr from '#lib/components/Fr.svelte';
    import En from '#lib/components/En.svelte';
    import LiensContact from '#lib/components/LiensContact.svelte';
    import { menu, lien } from '#lib/navigation.ts';
    import { t } from '#lib/langue.svelte.ts';
    import { infos } from '#lib/infos.ts';
    import photo from '#lib/assets/photo.jpg';

    // les cartes de la page : toutes les sections du menu, sauf l'accueil
    const cartes = menu.filter((section) => section.route !== '/');

    // tes initiales, affichées à la place de la photo (ex : "SG")
    const initiales = infos.nom
        .split(' ')
        .map((mot) => mot[0])
        .join('');
</script>

<section class="intro">
    <!-- Pour mettre ta photo à la place des initiales (voir le README) :
         1. dépose ta photo dans src/lib/assets/, par exemple photo.jpg
         2. ajoute dans le <script> : import photo from '#lib/assets/photo.jpg';
         3. remplace la ligne ci-dessous par : <img class="photo" src={photo} alt={infos.nom} /> -->
    <img class="photo" src={photo} alt={infos.nom} />

    <div>
        
        <h1>{infos.nom}</h1>

        <Fr>
            <p>Étudiant Ingénieur - Département Électronique, Énergie Électrique et Automatique à l'ENSEEIHT (Toulouse INP)</p>
        </Fr>
        <En>
            <p>Engineering Student - Electrical Engineering, Electronics Control @ ENSEEIHT (Toulouse INP)</p>
        </En>

        <LiensContact />
    </div>
</section>

<h2>{t({ fr: 'Qui suis-je ?', en: 'About me' })}</h2>

<Fr>
    <p>
        Je suis un jeune étudiant passionné par les nouvelles technologies et l'informatique. Depuis longtemps j'aime comprendre comment le monde fonctionne. Mon but est d'utiliser la technologie pour faire avancer le monde dans une direction plus responsable, consciente des limites planétaires et sociales.
    </p>
</Fr>
<En>
    <p>I'm a young student passionate about new technologies and computer science. For a long time, I have liked to understand how the world is working. My goal is to use technology to make the world go forward in a responsible way, conscious of planetarium and social limits.</p>
</En>

<h2>{t({ fr: 'Découvrir mon portfolio', en: 'Explore my portfolio' })}</h2>

<div class="grille">
    <!-- une carte par section ; (section.route) est la clé qui identifie chaque carte -->
    {#each cartes as section (section.route)}
        <a class="carte" href={lien(section.route)}>
            <h3>{t(section.titre)}</h3>
            <p class="texte-secondaire">{t(section.description)}</p>
            <span class="voir">{t({ fr: 'Voir', en: 'View' })} →</span>
        </a>
    {/each}
</div>

<style>
    .intro {
        display: flex;
        align-items: center;
        gap: 2rem;
        margin-bottom: 1rem;
    }

    .photo {
        display: grid;
        place-items: center;                  /* centre les initiales */
        flex-shrink: 0;                       /* la photo ne rétrécit pas */
        width: 128px;
        height: 128px;
        border-radius: 50%;                   /* un cercle */
        object-fit: cover;                    /* pour une vraie photo : remplit le cercle sans déformer */
        background-color: var(--bleu-clair);
        color: var(--bleu);
        font-size: 2.5rem;
        font-weight: 700;
    }


    h1 {
        font-size: 2.5rem;
        margin-bottom: var(--size-medium);
    }

    .voir {
        color: var(--bleu);
        font-weight: 600;
    }
</style>
