import React, { Fragment } from 'react'
import { Col, Row } from 'reactstrap'

import './ExploreBarStyle.css'



const ExploreBar = ({
    selected,
    explorers,
    onSelected,
}) => {

    return (
        <div style={{paddingTop: '32px'}}>           
            <Row>
                <Col sm={3}>
                    <h2 className='exploreBarHeader ' >Explore</h2> 
                </Col>  
                <Col>
                    <ul className='exploreBar'>
                    {
                        explorers.map((ex) => {

                            let active = ex.title === selected ? 'active' : '';

                            return (                        
                                <li key={ex.title} className={`exploreBarLine ${active}`}>
                                    <a href={ex.url} className='exploreBarItem' onClick={ e => onSelected(e, ex.title)}>{ex.title}</a>
                                </li>
                            )
                        })

                    }
                    </ul>
                </Col>
            </Row>
        </div>
    )

}

export default ExploreBar;