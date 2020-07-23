import React, { Fragment, useEffect, useContext } from 'react';

import Hero from '../../commons/Hero'
import TileCase from '../../commons/Tiles/TileCase'

const styles = {    
}

function BasicPage({cases}) {


    return (
        <div style={styles}>
            <Hero></Hero>
            <TileCase cases={cases}></TileCase>
        </div>
    )

}

export default BasicPage;

