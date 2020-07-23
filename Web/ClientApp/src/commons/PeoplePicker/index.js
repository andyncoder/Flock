import React from 'react';
import { connect } from 'react-redux';
import PeoplePicker from './PeoplePicker'

const mapStateToProp = (state) => {
    return {
        peopleList : [
            { name : 'Andy Nguyen', image: '', topic: 'React Js '},
            { name : 'Mike Thompson', image: '', topic: 'Node Js'},
            { name : 'Jeff Rogers', image: '', topic: '.Net  Core v3.0'}
            
        ]
    }
}

export default connect(mapStateToProp, null) (PeoplePicker);

