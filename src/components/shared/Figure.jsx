import React from 'react';
import PropTypes from 'prop-types';

export function Figure(props) {
    const {
        figureClass,
        imageClass,
        imageSrc,
        imageAlt,
        figcaption,
    } = props;

    return (
        <figure className={figureClass}>
            <img
                className={imageClass}
                src={imageSrc}
                alt={imageAlt}
            />
            {figcaption && (
                <figcaption>
                    {figcaption}
                </figcaption>
            )}
        </figure>
    );
}

Figure.defaultProps = {
    figureClass: '',
    imageClass: '',
    imageSrc: '',
    imageAlt: '',
    figcaption: '',
};

Figure.propTypes = {
    figureClass: PropTypes.string,
    imageClass: PropTypes.string,
    imageSrc: PropTypes.string,
    imageAlt: PropTypes.string,
    figcaption: PropTypes.string,
};