import React from 'react';
import TileCase from '../../../../commons/Tiles/TileCase'

const pStyle = {
    paddingTop: '48px',
    marginBottom: '0'
}

const transparent = 'transparent';

const ExploreTile = ({tiles}) => {

    return (
        <div style={pStyle}>
            <TileCase cases={tiles} background={transparent}></TileCase> 
        </div>
    )
}

export default ExploreTile;