import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import Company from './components/Company/Company'
import Creator from './components/Creator/Creator';

class OnboardPage extends Component {

    constructor(props){
        super(props)

        this.state = {
            enroll : 'o'
        };
    }

    render() {

        const { enroll } = this.state; 

        return (
            <Fragment>
                {
                  enroll == 'o' ? (<Company></Company> )
                                : ( <Creator></Creator>)
                }
            </Fragment>
        )
    }

}


const OnboardContainer =  connect()(OnboardPage)
export { OnboardContainer as OnboardPage }

