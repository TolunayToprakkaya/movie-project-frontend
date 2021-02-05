import React, {Component} from 'react';

class NewCastForm extends Component {
    constructor(props) {
        super(props);
        console.log("NewCastForm.js -> constructor(props) -> ", props);
    }

    render() {
        return (
            <div>
                <h2>New Cast Form</h2>
            </div>
        )
    }
}

export default NewCastForm;

/*
    1) Create Component
    2) Constructor
*/