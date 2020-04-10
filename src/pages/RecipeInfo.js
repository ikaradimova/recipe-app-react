import React, {Component} from "react";
import {withRouter} from 'react-router-dom';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as actions from "../redux/actions";

class RecipeInfo extends Component {

    componentDidMount = () => {
        const recipeId = this.props.match.params.id;
        this.props.getRecipeDetails(recipeId);
    }

    render() {
        const recipe = this.props.recipeDetails;
        const cuisines = recipe.cuisines ? recipe.cuisines : [];
        const diets = recipe.diets ? recipe.diets : [];
        const ingredients = recipe.extendedIngredients ? recipe.extendedIngredients : [];
        const instructions = recipe.analyzedInstructions ? recipe.analyzedInstructions : [];
        return <div className="container recipe-info-container">
            <div className="row justify-content">
                <h1 className="col-12 d-flex justify-content-center">{recipe.title}Title</h1>
            </div>
            <hr/>
            <div className="row">
                <div className="col-3">
                    <img src={recipe.image} alt=""/>
                </div>
                <div className="col-3 offset-5">
                    <div>Ready in {recipe.readyInMinutes} minutes</div>
                    <div>Servings: {recipe.servings}</div>
                    <div>Health score: {recipe.healthScore}</div>
                    <div>{cuisines.map((cuisine, index) => {
                        if (index === 0) {
                            return `Cuisines: ${cuisine}`;
                        } else {
                            return `, ${cuisine}`;
                        }
                    })}</div>
                    <div>{diets.map((diet, index) => {
                        if (index === 0) {
                            return `Diets: ${diet}`;
                        } else {
                            return `, ${diet}`;
                        }
                    })}</div>
                </div>
            </div>
            <hr/>
            <div className="row">
                <h2>Ingredients</h2>
            </div>
            <div className="row">
                <div>
                    <ul>
                        {ingredients.map((ingredient, index) => {
                            return <li key={index}>{ingredient.originalString}</li>
                        })}
                    </ul>
                </div>
            </div>
            <hr/>
            <div className="row">
                <h2>Instructions</h2>
            </div>
            <div className="row">
                <div>
                    <ul>
                        {instructions.map((instruction) => {
                            return instruction.steps.map((step, index) => {
                                return <li key={index}>{step.step}</li>
                            })
                        })}
                    </ul>
                </div>
            </div>
        </div>
    }
}

const mapStateToProps = state => {
    return {
        recipeDetails: state.recipeDetails
    }
};

const mapStateToDispatch = dispatch => {
    return bindActionCreators({
        setRecipeDetails: actions.setRecipeDetails,
        getRecipeDetails: actions.getRecipeDetails
    }, dispatch)
};

export default connect(mapStateToProps, mapStateToDispatch)(withRouter(RecipeInfo));
