import React from 'react';
import cn from 'classnames';
import { Spinner } from 'reactstrap';

import Card from '../../components/Card';
import { useGetRecipesQuery } from '../../service/api';
import ErrorMessage from '../../components/ErrorMessage';
import { Link } from 'react-router-dom';

const propTypes = {};
const defaultProps = {};

function RecipesPreview() {
    const { data: recipes, error, isLoading } = useGetRecipesQuery();

    if (error) {
        console.log('error', error);
        return <ErrorMessage />;
    }
    
    const recipesPreview = recipes && recipes.map(recipe => {
        const {
            id,
            title,
            imageUrl
        } = recipe;

        const previewFooter = <Link to={`/recipe/${id}`}>Open Recipe Details</Link>;
        
        return (
            <Card
                className={cn(
                    'm-2'
                )}
                key={id}
                title={title}
                imageLink={imageUrl}
                footer={previewFooter}
            />
        );
    });

    return (
        <div
            className={cn(
                'd-flex',
                'flex-md-row',
                'flex-wrap',
                'm-5',
                'flex-column',
                'justify-content-center'
            )}
        >
            { isLoading && <Spinner /> }
            { !isLoading && recipes && recipesPreview }
        </div>
    );
}

RecipesPreview.propTypes = propTypes;
RecipesPreview.defaultProps = defaultProps;

export default RecipesPreview;