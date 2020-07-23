import React from 'react';

const PadItem = (props) => {

    return(
        <div>
            <h3>{props.name}</h3>
            <h4>{props.desc}</h4>
        </div>
    )
}

export default PadItem;