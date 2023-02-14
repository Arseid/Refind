import React from 'react';

const Garage = ({ darkened = false }) => {
    return (
        <div style={{ width: 'fit-content', height: 'fit-content' }}>
            {darkened === false ? (
                <img
                    style={{ width: '100%', height: '100%' }}
                    src={require('ressources/garage.jpg')}
                    alt=""
                />
            ) : (
                <img
                    style={{ width: '100%', height: '100%' }}
                    src={require('ressources/garage_darkened.jpg')}
                    alt=""
                />
            )}
        </div>
    );
};

export default Garage;
