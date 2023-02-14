import React from 'react'

const Street = ({ darkened = false }) => {
    return (
        <div style={{width: 'fit-content', height: 'fit-content'}}>
            {darkened === false
                ?
                <img style={{ width: "100rem", height: "50rem" }}
                     src={require('ressources/street.png')} alt='' />
                :
                <img style={{ width: "100rem", height: "50rem" }}
                     src={require('ressources/street_darkened.png')} alt='' />
            }
        </div>
    )
}

export default Street