import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import cn from 'classnames';

import Layout from './components/Layout';
import RecipesPreview from './pages/RecipesPreview';
import RecipeDetails from './pages/RecipeDetails';

import './app.scss';

function App() {
    return (
        <div className={cn('app')}>
            <Layout>
                <Routes>
                    <Route path="/recipe/:id" element={<RecipeDetails />} />
                    <Route path="/recipes" element={<RecipesPreview />} />
                    <Route path="/" element={<Navigate replace to={'/recipes'} />} />
                </Routes>
            </Layout>
        </div>
    );
}

export default App;