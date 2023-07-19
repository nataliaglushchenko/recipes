import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardBody, CardFooter, CardImg, CardText, CardTitle } from 'reactstrap';
import { CARD_SIZE } from './constants';

const propTypes = {
    key: PropTypes.string,
    title: PropTypes.string.isRequired,
    imageLink: PropTypes.string.isRequired,
    children: PropTypes.node,
    size: PropTypes.oneOf([CARD_SIZE.SMALL, CARD_SIZE.LARGE]),
    footer: PropTypes.node
};

const defaultProps = {
    size: CARD_SIZE.SMALL
};

const getWidth = (size) => {
    return size === CARD_SIZE.LARGE ? 1000 : 500;
};

function RecipeCard(props) {
    const {
        key,
        title,
        imageLink,
        children,
        className,
        size,
        footer
    } = props;

    return (
        <Card
            className={className}
            outline
            style={{
                maxWidth: getWidth(size)
            }}
            key={key}
        >
            <CardImg
                src={imageLink}
                top
                style={{
                    maxWidth: getWidth(size)
                }}
            />
            <CardBody>
                <CardTitle tag="h4">{title}</CardTitle>
                <CardText>
                    {children}
                </CardText>
            </CardBody>
            <CardFooter>
                {footer}
            </CardFooter>
        </Card>
    );
}

RecipeCard.propTypes = propTypes;
RecipeCard.defaultProps = defaultProps;

export default RecipeCard;