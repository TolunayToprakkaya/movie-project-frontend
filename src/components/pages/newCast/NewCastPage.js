import React, {Component} from 'react';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {newCastCreate} from "../../../actions/cast/newCastAction";
import NewCastForm from "./NewCastForm";

class NewCastPage extends Component {
    constructor(props) {
        super(props);
        console.log("NewCastPage.js -> constructor(props) -> ", props);
    }

    static propTypes = {
        newCast: PropTypes.object.isRequired
    }

    render() {
        return (
            <div>
                <h2>"New Cast"</h2>
                <NewCastForm
                    newCast={this.props.newCast}
                    newCastCreate={this.props.newCastCreate}/>
            </div>
        )
    }
}

//Reducer
const mapStateToProps = state => {
    return {
        newCast: state.newCast
    }
};

//Action
const mapDispatchToProps = {
    newCastCreate
};

export default connect(mapStateToProps, mapDispatchToProps)(NewCastPage);

/*
    1) Create Component
    2) Constructor
    3) Connect Redux
    4) propTypes
    5) mapStateToProps and mapDispatchToProps
    6) Create NewCastForm -> props = newCast and newCastCreate
*/