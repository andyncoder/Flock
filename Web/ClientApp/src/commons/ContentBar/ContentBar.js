import React from 'react'

const ContentBar = (props) => {

    const col = props.col || 3;

    return ( 
    <div style={{paddingTop: '32px'}}>

        <div className="row">
            <div className={`col-sm-${col}`}>
                <h2 className="headerBar">{props.title}</h2>
            </div>
        </div>
    </div>
    )
}

export default ContentBar;