import React from 'react'

const PadFeature = (props) => {
    
    return(
        <div> 
            <h3>Featured project</h3>
            <div>
                <h2>{props.name}</h2>
                <h3>{props.desc}</h3>
            </div>
        </div>
    ) 
}

export default PadFeature;