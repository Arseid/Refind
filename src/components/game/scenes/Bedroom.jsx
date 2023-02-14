import React from 'react';

const Bedroom = ({ darkened = false }) => {
    return (
        <div style={{ width: 'fit-content', height: 'fit-content' }}>
            {darkened === false ? (
                <img
                    style={{ width: '100%', height: '100%' }}
                    src={require('ressources/bedroom.jpg')}
                    alt=""
                />
            ) : (
                <img
                    style={{ width: '100%', height: '100%' }}
                    src={require('ressources/bedroom_darkened.jpg')}
                    alt=""
                />
            )}
        </div>
    );
};

export default Bedroom;
