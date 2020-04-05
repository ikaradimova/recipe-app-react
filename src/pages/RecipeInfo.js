import React, {Component} from "react";
import {withRouter} from 'react-router-dom';
import { connect } from "react-redux";
import {bindActionCreators} from "redux";
import * as actions from "../redux/actions";

class RecipeInfo extends Component {

    componentDidMount = () => {
        const recipeId = this.props.match.params.id;
        console.log(recipeId);
        this.props.getRecipeDetails(recipeId);
        // console.log(this.props.recipeDetails);
    }

    render() {
        const recipe = this.props.recipeDetails;
        console.log(recipe);
        console.log(recipe.cuisines);
        // recipe.cuisines.map(cuisine => {console.log(cuisine);} );
        return <div className="container recipe-info-container">
            <div className="row justify-content">
                <h1 className="col-12 d-flex justify-content-center">{recipe.title}Title</h1>
            </div>
            <hr/>
            <div className="row">
                <div className="col-3">
                    <img src={recipe.image}/>
                </div>
                <div className="col-3 offset-5">
                    <div>By: {recipe.author}</div>
                    <div>Cuisines:  </div>
                    <div>Diets: </div>
                    <div>Health score: {recipe.healthScore}</div>
                    <div>Ready in {recipe.readyInMinutes} minutes</div>
                    <div>Servings: {recipe.servings}</div>
                </div>
            </div>
            <hr/>
            <div className="row">
                <h2>Ingredients</h2>
            </div>
            <div className="row">
                <div>
                    <ul>
                        <li>List item</li>
                        <li>List item</li>
                        <li>List item</li>
                        <li>List item</li>
                        <li>List item</li>
                        <li>List item</li>
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
                        <li>List item</li>
                        <li>List item</li>
                        <li>List item</li>
                        <li>List item</li>
                        <li>List item</li>
                        <li>List item</li>
                    </ul>
                </div>
            </div>
            {/*{this.props.recipeDetails.title}*/}
        </div>
    }
}

const mapStateToProps = state => {
    console.log(state);
    return {
        recipeDetails: state.recipeDetails,
    }
};

const mapStateToDispatch = dispatch => {
    return bindActionCreators({
        setRecipeDetails: actions.setRecipeDetails,
        getRecipeDetails: actions.getRecipeDetails,
    }, dispatch)
};

export default connect(mapStateToProps, mapStateToDispatch)(withRouter(RecipeInfo));
// export default RecipeInfo;