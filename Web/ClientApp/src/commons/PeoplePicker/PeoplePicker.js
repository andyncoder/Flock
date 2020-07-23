
import React from 'react';
import People from './People';

const PeoplePicker = ({peopleList}) => {

    const reviewers = peopleList.map((p, i) =>{ 
       return ( 
            <li key={i}>
                <People {...p}></People>
            </li>
        );
    });


    return(
        <div className='feature-block'>
            <ul>
                <h4>People </h4>
                {reviewers}
            </ul>
        </div>
    );
}


export default PeoplePicker;