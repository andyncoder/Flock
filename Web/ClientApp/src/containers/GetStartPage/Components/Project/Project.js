import React from 'react'
import { FormGroup, Label, Input } from 'reactstrap';

const Project = (props) => {

    return (
        <div class='container content'>
            <FormGroup>
                <label> <h3>Would you like to start a new project ? </h3> </label>
                <Input type="select" name="select" id="exampleSelect">
                    <option>Choose an option</option>
                    <option>Yes</option>
                    <option>No</option>
                </Input>
            </FormGroup>
        </div>
    )
}
export default KickOff;