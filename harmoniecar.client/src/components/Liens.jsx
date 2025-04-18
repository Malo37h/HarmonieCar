import React from 'react';
import { Link } from 'react-router-dom';
//import '../styles/Liens.css';

function Liens() {
    return (
        <div className="landing-wrapper">
            <meta charset="utf-8" />
            <header>
                <nav>
                    <img src="../../public/assets/Renaudiere.jpg" alt="Logo de La Renaudiere" className="logo" />
                    <h1>Harmonie Carquefou</h1>
                    <ul>
                        <li><Link to="/">Acceuil</Link></li>
                        <li><Link to="/about">A propos</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/links">Liens utiles</Link></li>
                        {/*<li><Link to="/contact">Contact</Link></li>*/}
                    </ul>
                </nav>
            </header>
            <main>
                <div className="content-container">
                    <h2>Les liens par catégories :</h2>

                    <h3>📁 Les orchestres</h3>

                    <p><strong>big band'y</strong><br />
                        <span class="tab"></span>Un nouveau groupe de Jazz est ne à Carquefou. Dirige par Yves Brouillet, professeur de trompette à l'ecole de musique, ce groupe cree en 1987...
                    </p>

                    <p><strong>Harmonie de Geniilé</strong><br />
                        <span class="tab"></span>Une harmonie vieille de plus de 140 ans...
                    </p>

                    <p><strong>Harmonie Municipale Ouvriere d’Avion</strong><br />
                        <span class="tab"></span><a href="http://www.harmonie-avion.fr/" target="_blank"><strong>Harmonie d’Avion</strong></a>, dirigee par Michel Nowak, compte environ 60 musiciens.
                    </p>

                    <p><strong>Orchestre d’Harmonie de Bapaume</strong><br />
                        <span class="tab"></span>L'Orchestre d’Harmonie de Bapaume (Pas-de-Calais)...
                    </p>

                    <p><strong>Orchestre d’Harmonie d’Epehy</strong><br />
                        <span class="tab"></span>Epehy est le plus petit village de France...
                    </p>

                    <p><a href="https://www.ohh-harmonie.fr/"><strong>Orchestre d’Harmonie Herblinois</strong></a><br />
                        <span class="tab"></span>Le site de l'orchestre d’harmonie de Saint Herblain.
                    </p>

                    <h3>📁 La musique</h3>

                    <p><strong>Clarinette.net</strong><br />
                        <span class="tab"></span>Tout ce que vous avez toujours voulu savoir sur la clarinette...
                    </p>

                    <p><a href="https://www.musicologie.org/" target="_blank"><strong>La Gazette musicale</strong></a><br />
                        <span class="tab"></span>Un tres complet integrant actualite musicale, encyclopedie musicale, biographies, etc...
                    </p>

                <p><a href="https://musique-harmonie.fr/" target="_blank"><strong>Musique en Harmonie</strong></a><br />
                        <span class="tab"></span>Musique en Harmonie est le site de tous ceux qui, musiciens ou non...
                    </p>

                    <h3>📁 La ville de Carquefou (2 liens)</h3>

                    <p><strong>Judo Club de Carquefou</strong><br />
                        <span class="tab"></span>Le judo est un art martial et un sport de combat d’origine japonaise...
                    </p>

                    <p><a href="https://www.carquefou.fr/" target="_blank"><strong>La ville de Carquefou</strong></a><br />
                        <span class="tab"></span>Le site officiel de la ville de Carquefou.
                    </p>
                </div>
            </main>
            <footer>
                &copy; 2025 Malo37h
            </footer>
        </div >
    );
}

export default Liens;
