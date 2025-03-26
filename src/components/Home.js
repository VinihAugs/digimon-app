import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className="home-container">
            <div className="theme-buttons">
                <button data-theme="esperanca">Esperança</button>
                <button data-theme="coragem">Coragem</button>
            </div>
        </div>
    );
};
export default Home;