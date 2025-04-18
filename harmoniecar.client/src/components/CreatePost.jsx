import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';


const CreatePost = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const creationDate = new Date();

    const handleSubmit = async (data) => {
        data.preventDefault();

        if (!title || !content) {
            setError('Merci de remplir tous les champs.');
            return;
        }

        try {
            const response = await fetch('https://localhost:7004/api/BlogPosts', {
                method: 'POST',
                headers: {'Content-type': 'application/json'},
                body: JSON.stringify({
                    id: 0,
                    title,
                    content,
                    creationDate
                }),
            });

            if (!response.ok) {
                throw new Error('Erreur lors de la création du post.');
            }

            navigate('/blog'); // redirection après création
        } catch (err) {
            setError(err.message);
        }
    };

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
                    <h2>Creer un nouveau post</h2>
                    {error && <p className="error">{error}</p>}
                    <form onSubmit={handleSubmit}>
                        <label>
                            Titre :
                            <input
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                required
                            />
                        </label>

                        <label>
                            Contenu :
                            <textarea
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                                rows="10"
                                required
                            ></textarea>
                        </label>
                        <div className="flex-button">
                            <button className="back-button" onClick={() => navigate('/blog')}>Retour</button>
                            <button type="submit">Publier</button>
                        </div>
                    </form>
                </div>
            </main>
            <footer>
                &copy; 2025 Malo37h
            </footer>
        </div>
    );
};

export default CreatePost;
