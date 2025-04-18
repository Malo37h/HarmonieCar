import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/LandingPage.css';
import BlogPosts from './BlogPosts';

function LandingPage() {
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
                <BlogPosts/>
            </main>
            <footer>
                &copy; 2025 Malo37h
            </footer>
        </div>
    );
}

export default LandingPage;
