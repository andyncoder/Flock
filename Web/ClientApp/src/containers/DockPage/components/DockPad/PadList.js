import React from 'react'

const PadList = (props) => {
    
    return(
        
        <div className='feature-block'>
            <ul>
                <h3>Pad list ...</h3>
                {props.children}
            </ul>
        </div>
    )
};


export default PadList;