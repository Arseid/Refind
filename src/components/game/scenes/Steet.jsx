import React from 'react';

const Street = ({ darkened }) => {
    return (
        <>
            {darkened === false ? (
                <img
                    style={{ width: '100%', height: 'auto' }}
                    src={require('ressources/street.png')}
                    alt=""
                />
            ) : (
                <img
                    style={{ width: 'auto', height: '30rem' }}
                    src={require('ressources/street.png')}
                    alt=""
                />
            )}
        </>
    );
};

export default Street;
