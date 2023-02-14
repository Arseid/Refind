import React from 'react'

const Garage = ({ darkened = false }) => {
    return (
        <div style={{width: 'fit-content', height: 'fit-content'}}>
            {darkened === false
                ?
                <img style={{ width: "100rem", height: "50rem" }}
                     src={require('ressources/garage.png')} alt='' />
                :
                <img style={{ width: "100rem", height: "50rem" }}
                     src={require('ressources/garage_darkened.png')} alt='' />
            }
        </div>
    )
}

export default Garage