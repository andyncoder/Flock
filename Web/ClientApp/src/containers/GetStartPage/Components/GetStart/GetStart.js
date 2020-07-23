import React from 'react'

import ContentBar from '../../../../commons/ContentBar/ContentBar'

import KickOff from '../KickOff/KickOff'

const GetStart = (props) => {

    return (
        <div class='container content'>
            <ContentBar title={"Weclome to Flock!"} col={8} />
            <KickOff />
            
        </div>
    )
}

export default GetStart;