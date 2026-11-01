<!-- Parcours ingénieur > Compétences
     Un grand titre, puis 3 catégories : Langages, Technique, Soft skills.
     Chaque compétence est une étiquette : <span class="tag">Nom</span>
     Pour en ajouter une : copie une ligne <span class="tag">...</span> et change le texte.
     Écris dans les deux langues : une version dans <Fr>, une dans <En>.

     Idées pour « Technique » (tout ce qui n'est pas un langage : outils, logiciels, savoir-faire) :
     - logiciels : MATLAB, Simulink, LTspice, KiCad, SolidWorks, Excel, Git, Linux...
     - savoir-faire de labo : mesures à l'oscilloscope, montage de circuits, soudure...
     - domaines : électronique, automatique, électrotechnique, machine learning... -->

<script lang="ts">
    import Fr from '#lib/components/Fr.svelte';
    import En from '#lib/components/En.svelte';
</script>

<Fr>
    <h2>Compétences</h2>

    <div class="grille">
        <div class="carte">
            <h3>Informatique</h3>
            <h4>Langages</h4>
            <div class="tags">
                <span class="tag">Python</span>
                <span class="tag">C</span>
                <span class="tag">HTML</span>
                <span class="tag">CSS</span>
                <span class="tag">Java Script</span>
            </div>
            <h4>Outils</h4>
            <div class="tags">
                <span class="tag">Windows</span>
                <span class="tag">Excel</span>
                <span class="tag">Git</span>
            </div>
        </div>

        <div class="carte">
            <h3>Technique</h3>
            <div class="tags">
                <span class="tag">Mathématiques</span>
                <span class="tag">Physique des circuits</span>
                <span class="tag">Physique électromagnétique</span>
            </div>
        </div>

        <div class="carte">
            <h3>Soft skills</h3>
            <div class="tags">
                <span class="tag">Travail en équipe</span>
                <span class="tag">Remise en question</span>
                <span class="tag">Adaptabilité</span>
                <span class="tag">Prise d'initiatives</span>
            </div>
        </div>
    </div>
</Fr>

<En>
    <h2>Skills</h2>

    <div class="grille">
        <div class="carte">
            <h3>Computer science</h3>
            <h4>Languages</h4>
            <div class="tags">
                <span class="tag">Python</span>
                <span class="tag">C</span>
                <span class="tag">HTML</span>
                <span class="tag">CSS</span>
                <span class="tag">JavaScript</span>
            </div>
            <h4>Tools</h4>
            <div class="tags">
                <span class="tag">Windows</span>
                <span class="tag">Excel</span>
                <span class="tag">Git</span>
            </div>
        </div>

        <div class="carte">
            <h3>Technical</h3>
            <div class="tags">
                <span class="tag">Mathematics</span>
                <span class="tag">Circuit physics</span>
                <span class="tag">Electromagnetic physics</span>
            </div>
        </div>

        <div class="carte">
            <h3>Soft skills</h3>
            <div class="tags">
                <span class="tag">Teamwork</span>
                <span class="tag">Self-questioning</span>
                <span class="tag">Adaptability</span>
                <span class="tag">Initiative</span>
            </div>
        </div>
    </div>
</En>

<style>
    /* le grand titre de la page */
    h2 {
        font-size: 1.75rem;
    }

    /* les étiquettes rangées côte à côte, à la ligne quand il n'y a plus de place */
    .tags {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
    }

    

    /* un peu d'espace entre le titre de la catégorie et ses étiquettes */
    h3 {
        margin-bottom: var(--size-medium);
    }
</style>
