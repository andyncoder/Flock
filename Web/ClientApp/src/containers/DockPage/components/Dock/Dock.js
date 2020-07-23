import React, { useEffect, useContext  } from 'react'
import { Container, 
    Row, 
    Col, 
} from 'reactstrap';

import '../../style.css'

import DockPadContainer from '../DockPad';
import ReviewerContainer from '../../../../commons/PeoplePicker'

const Dock = (props) => {
    
    return(
        <div className='deck-content'> 
            <Container>
                <h2>Lorem Ipsum</h2>  
                <DockPadContainer></DockPadContainer>
                <ReviewerContainer></ReviewerContainer>
            </Container>
        </div>
    );
}

export default Dock;
