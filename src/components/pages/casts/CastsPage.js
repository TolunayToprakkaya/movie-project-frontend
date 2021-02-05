import React, {Component} from 'react';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import CastList from "./CastList";
import {fetchCasts} from "../../../actions/cast/castsAction";

class CastsPage extends Component {
    constructor(props) {
        super(props);
        console.log("CastsPage.js -> constructor(props) -> ", props);
    }
    static propTypes = {
        casts: PropTypes.object.isRequired
    }

    render() {
        return(
            <div>
                <h1>Casts</h1>
                <CastList
                    casts={this.props.casts}/>
            </div>
        )
    }

    componentDidMount() {
        this.props.fetchCasts();
    }
}

//Kullanılan Reducerlar Yazılır
const mapStateToProp = state => {
    return {
        casts: state.casts
    }
};

//Kullanılan Actionlar Yazılır
const mapDispatchToProp = {
    fetchCasts
};

export default connect(mapStateToProp, mapDispatchToProp)(CastsPage);

/*
    1) Create Component
    2) Constructor
    3) Connect Redux
    4) mapStateToProp and mapDispatchToProp -> componentDidMount
    5) propTypes
    6) CastList
*/