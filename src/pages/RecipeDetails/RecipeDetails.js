import React from 'react';
import cn from 'classnames';
import { Badge, Spinner } from 'reactstrap';
import { useParams } from 'react-router';
import ReactMarkdown from 'react-markdown';

import ErrorMessage from '../../components/ErrorMessage';
import { useGetRecipeDetailsQuery } from '../../service/api';
import Card from '../../components/Card';
import { CARD_SIZE } from '../../components/Card/constants';

const propTypes = {};
const defaultProps = {};

function Details() {
    let { id } = useParams();
    
    const { data: recipeDetails, error, isLoading } = useGetRecipeDetailsQuery(id);

    if (isLoading) { 
        return <Spinner />;
    }
    
    if (error) {
        return <ErrorMessage />;
    }
    
    const {
        title = '',
        imageUrl = '',
        description,
        chefName = null,
        tags = null
    } = recipeDetails;

    const displayTags = tags && tags.map(tag => <Badge key={tag.id} className={cn('mx-2')}>{tag.name}</Badge>);

    return (
        <div
            className={cn(
                'm-5',
            )}
        >
            <Card
                className={cn(
                    'm-2'
                )}
                id={id}
                title={title}
                imageLink={imageUrl}
                footer={<div>{displayTags}</div>}
                size={CARD_SIZE.LARGE}
            >
                <h5>Chef: {chefName ? chefName : 'unknown'}</h5>
                <ReactMarkdown>{description}</ReactMarkdown>
            </Card>
        </div>
    );
}

Details.propTypes = propTypes;
Details.defaultProps = defaultProps;

export default Details;
