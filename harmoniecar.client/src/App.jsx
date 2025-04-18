import React from 'react';
import LandingPage from './components/LandingPage';
import Propos from './components/Propos';
import Liens from './components/Liens';
import Blog from './components/Blog';
import BlogDetail from './components/Detail/BlogDetail';
import BlogPosts from './components/BlogPosts';
import CreatePost from './components/CreatePost';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {


    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/about" element={<Propos />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/detail/:id" element={<BlogDetail />} />
                <Route path="/blogposts" element={<BlogPosts />} />
                <Route path="/links" element={<Liens />} />
                <Route path="/create-post" element={<CreatePost />} />
                <Route path="/contact" element={<div>formulaire de contact a remplir</div> } />
            </Routes>
        </Router>
    );
}

export default App;