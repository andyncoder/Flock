import React from 'react';

import { 
    Container, 
    Row, 
    Col } 
  from 'reactstrap';
  

import PadFeature from './PadFeature';
import PadList from './PadList';
import PadItem from './PadItem'


const Dock = ({padStart, pads}) => {
    
    const list = pads.map((p, i) => {
        return (
            <li key={i}>
                <PadItem {...p}></PadItem>
            </li>
        );
     });

    return(
        <Container>
            <Row>
                <Col>
                    <PadFeature {...padStar}></PadFeature>
                </Col>
                <Col>
                    <PadList>{list}</PadList>
                </Col>
            </Row>
        </Container>
    );
};


export default Dock;