import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
//import '../../Styles/blogdetail.css';
import { Link } from 'react-router-dom';
import {  } from 'react-router-dom';

function BlogDetail() {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://localhost:7004/api/BlogPosts/${id}`)
            .then(res => {
                if (!res.ok) throw new Error('Post introuvable');
                return res.json();
            })
            .then(data => {
                setPost(data);
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    }, [id]);

    if (loading) return <p>Chargement...</p>;
    if (error) return <p>Erreur : {error}</p>;


    const date = new Date(post.creationDate);
    let formattedDate = date.toLocaleDateString('fr-FR');
    let formattedTime = date.toLocaleTimeString('fr-FR', {
        hour: '2-digit',
        minute: '2-digit'
    });


    return (
        <div className="landing-wrapper">
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
                    <h2>{post.title}</h2>
                    <p>{post.content}
                        <small>Publie le : {formattedDate} a {formattedTime}</small></p>
                    
                    <button className="back-button" onClick={() => navigate('/blog')}>Retour</button>
                </div>
            </main>
            <footer className="footer-css">
                &copy; 2025 Malo37h
            </footer>
        </div>
    );
}

export default BlogDetail;
