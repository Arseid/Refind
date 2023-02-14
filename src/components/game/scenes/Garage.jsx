import React from 'react';

const Garage = ({ darkened }) => {
    return (
        <>
            {darkened === false ? (
                <img
                    style={{ width: '100%', height: 'auto' }}
                    src={require('ressources/garage.png')}
                    alt=""
                />
            ) : (
                <img
                    style={{ width: 'auto', height: '30rem' }}
                    src={require('ressources/garage.png')}
                    alt=""
                />
            )}
        </>
    );
};

export default Garage;
