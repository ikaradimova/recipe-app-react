import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as actions from "../redux/actions";

class FoodTrivia extends Component {
    constructor(){
        super();
        this.state = {};
        this.onClick = this.onClick.bind(this);
    }

    componentDidMount() {
        this.props.getRandomFoodTrivia();

    }

    onClick(){
        this.props.getRandomFoodTrivia();
    }

    render() {
        return <div className="container">
            <div className="row justify-content">
                <h1 className="col-12 d-flex justify-content-center">{this.props.randomFoodTrivia.text}</h1>
            </div>
            <div className="row justify-content">
                <div className="form-group col-12 d-flex justify-content-center">
                    <button className="btn btn-outline-primary food-trivia-button" onClick={this.onClick}>Generate new</button>
                </div>
            </div>

        </div>
    }
}

const mapStateToProps = state => {
    return {
        randomFoodTrivia: state.randomFoodTrivia
    }
};


const mapStateToDispatch = dispatch => {
    return bindActionCreators({
        setRandomFoodTrivia: actions.setRandomFoodTrivia,
        getRandomFoodTrivia: actions.getRandomFoodTrivia
    }, dispatch)
};

export default connect(mapStateToProps, mapStateToDispatch)(FoodTrivia);
