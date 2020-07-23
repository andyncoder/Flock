import React from 'react'

import Tile from '../Tiles/Tile'

import { CardColumns } from 'reactstrap';

import './tile.css';

function TileCase({cases, background}){

    const tiles = cases.map( (p, i) => {
       return ( <Tile key={i} data={p}></Tile> );
    });

    const color  = background !== null ?  background : ''

    return (
        <div className='tile-content' style={{ backgroundColor : color }}>
           <div className='container'>
                <CardColumns>
                    {tiles}
                </CardColumns>
            </div>
        </div>
    );
}


export default TileCase;
