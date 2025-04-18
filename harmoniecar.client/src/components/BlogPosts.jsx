import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import CreatePost from './CreatePost';

function truncateText(text, maxLength) {
    if (!text) return '';
    return text.length > maxLength ? text.slice(0, maxLength) + '... voir plus' : text;
}

const BlogPosts = () => {
    const [posts, setPosts] = useState([]);       // Contiendra la liste des articles
    const [loading, setLoading] = useState(true);   // Indique si la requête est en cours
    const [error, setError] = useState(null);       // Stocke un message d'erreur potentielle
    const navigate = useNavigate();

    // Charger les posts dès le chargement du composant
    useEffect(() => {
        fetch('https://localhost:7004/api/BlogPosts') // adapte le port
            .then(response => {
                if (!response.ok) throw new Error("Erreur serveur");
                return response.json();
            })
            .then(data => {
                setPosts(data);
                setLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            });
    }, []);


    if (error) return <p>Erreur : {error}</p>;
    if (loading) return <div className="skeleton"><h2>Chargement...</h2></div>; {


        return (
            <div className="content-container">
                <div className="Head-Blog">
                    <h2>Notre Blog</h2>
                    <button className="create-post-button" onClick={() => navigate('/create-post')}>Creer un post</button>
                </div>
                {(loading ? Array(3).fill({}) : posts).map((post, index) => {
                    let formattedDate = '';
                    let formattedTime = '';

                    if (post.creationDate) {
                        const date = new Date(post.creationDate);
                        formattedDate = date.toLocaleDateString('fr-FR');
                        formattedTime = date.toLocaleTimeString('fr-FR', {
                            hour: '2-digit',
                            minute: '2-digit'
                        });
                    }

                    return (
                        <div
                            key={post.id || index}
                            className={`blog-post ${loading ? 'skeleton' : ''}`}
                            onClick={() => !loading && post.id && navigate(`/detail/${post.id}`)}
                            style={{ cursor: loading ? 'default' : 'pointer' }}
                        >
                            <h3>{post.title || 'Titre à venir'}</h3>
                            <p>{truncateText(post.content, 100) || 'Chargement du contenu...'}</p>
                            <small>Publie le : {formattedDate} a {formattedTime}</small>
                        </div>
                    );
                })}
            </div>
        );
    }

};

export default BlogPosts;
