import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as actions from "../redux/actions";

class FoodJoke extends Component {
    constructor(){
        super();
        this.state = {};
        this.onClick = this.onClick.bind(this);
    }

    componentDidMount() {
        this.props.getRandomFoodJoke();

    }

    onClick(){
        this.props.getRandomFoodJoke();
    }

    render() {
        return <div className="container">
            <div className="row justify-content">
                <h1 className="col-12 d-flex justify-content-center">{this.props.randomFoodJoke.text}</h1>
            </div>
            <div className="row justify-content">
                <div className="form-group col-12 d-flex justify-content-center">
                    <button className="btn btn-outline-primary food-joke-button" onClick={this.onClick}>Generate new</button>
                </div>
            </div>

        </div>
    }
}

const mapStateToProps = state => {
    return {
        randomFoodJoke: state.randomFoodJoke
    }
};


const mapStateToDispatch = dispatch => {
    return bindActionCreators({
        setRandomFoodJoke: actions.setRandomFoodJoke,
        getRandomFoodJoke: actions.getRandomFoodJoke
    }, dispatch)
};

export default connect(mapStateToProps, mapStateToDispatch)(FoodJoke);
