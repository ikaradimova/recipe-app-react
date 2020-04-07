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
        console.log(this.props);
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
    console.log(state);
    return {
        randomFoodTrivia: state.randomFoodTrivia,
        // recipeView: state.recipeView,
        // searchByIngredient: state.searchByIngredient
        // favoriteRecipes: state.favoriteRecipes
    }
};


const mapStateToDispatch = dispatch => {
    return bindActionCreators({
        setRandomFoodTrivia: actions.setRandomFoodTrivia,
        getRandomFoodTrivia: actions.getRandomFoodTrivia,
        // changeViewAction: actions.changeViewAction,
        // searchByIngredientAction: actions.searchByIngredientAction,
        // addFavoriteRecipe: actions.addFavoriteRecipe,
        // removeFavoriteRecipe: actions.removeFavoriteRecipe
    }, dispatch)
};

export default connect(mapStateToProps, mapStateToDispatch)(FoodTrivia);
