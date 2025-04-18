import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/LandingPage.css';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
    const navigate = useNavigate();
    return (
        <div className="landing-wrapper">
            <meta charset="utf-8"/>
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
                <section className="content-container">
                    <div className="Head-Blog">
                        <h2>Bienvenue</h2>
                        <button className="Visite-blog-btn" onClick={() => navigate('/blog')}>Visitez notre blog !</button>
                    </div>
                    <p>
                        L'orchestre d'harmonie a pour origine l'harmonie, qui est constituee des instruments a vents de l'orchestre symphonique.<br /> Un orchestre d'harmonie est un ensemble musical regroupant des instruments a vent, des percussions et eventuellement une contrebasse a corde. <br /><br />

                        Son repertoire, dont la qualite musicale n'est plus a demontrer, s'etoffe d'annee en annee grace a des compositeurs qui mettent en valeur cette formation a l'aide de nombreuses compositions originales.<br /><br />

                        La musique d'harmonie, forme d'expression artistique a part entiere, s'adresse a un public populaire et averti. Son repertoire marie a la fois delicatesse, surprise, decouverte et profondeur.<br /><br /> Pour les musiciens, c'est a la fois une source de plaisir, mais aussi une ecole de l'exigence.<br /><br />

                        L'orchestre d'harmonie de l'ecole de musique de Carquefou, qui existe pratiquement depuis la creation de l'ecole de musique (en 1981) est constituee de 45 musiciens, eleves et adultes passionnes.<br /><br />

                        Notre orchestre d'harmonie participe et contribue a l'animation culturelle de la ville, a la diversite des prestations que l'ecole de musique offre aux Carquefoliens, ainsi qu'au rayonnement de la ville via la musique.<br /><br />

                        Depuis quelques annees, l'orchestre favorise les echanges avec d'autres villes (Allonnes, Auray, Saint-Hilaire de Riez, Bouguenais, Pornic ou encore Saint Julien de Concelles).<br /> Les deux dernieres annees, l'orchestre a egalement participe a un concours de classement organise par la Confederation Musicale de France, qui lui attribue un niveau de premiere division.<br /><br />

                        Martine Rossero, qui en assure la direction, a la volonte d'aborder des partitions originales et interessantes en s'adaptant au niveau des musiciens. L'objectif premier reste d'interesser le public, qui nous le rend bien par sa fidelite !

                    </p>
                    {/*<Link to="/signup" className="btn">SIGN UP</Link>*/}
                </section>
            </main>
            <footer>
                &copy; 2025 Malo37h
            </footer>
        </div>
    );
}

export default LandingPage;
