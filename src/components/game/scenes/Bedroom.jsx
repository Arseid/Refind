import React from 'react'

const Bedroom = ({ darkened = false }) => {
    return (
        <div style={{width: 'fit-content', height: 'fit-content'}}>
            {darkened === false
                ?
                <img style={{width: "100rem", height: "50rem"}}
                     src={require('ressources/bedroom.jpg')} alt=''/>
                :
                <img style={{width: "100rem", height: "50rem"}}
                     src={require('ressources/bedroom_darkened.jpg')} alt=''/>
            }
        </div>
    )
}

export default Bedroom