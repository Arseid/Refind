import React from 'react';

const Bedroom = ({ darkened }) => {
    return (
        <>
            {darkened === false ? (
                <img
                    style={{ width: '100%', height: 'auto' }}
                    src={require('ressources/bedroom.png')}
                    alt=""
                />
            ) : (
                <img
                    style={{ width: 'auto', height: '30rem' }}
                    src={require('ressources/bedroom.png')}
                    alt=""
                />
            )}
        </>
    );
};

export default Bedroom;
