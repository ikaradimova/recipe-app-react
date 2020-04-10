import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as actions from "../../redux/actions";
import SingleRecipeCard from "../singleRecipe/SingleRecipeCard";
import SingleRecipeInline from "../singleRecipe/SingleRecipeInline";
import Filter from "../Filter";

class RandomRecipes extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.props.getRandomRecipes();
    }

    getRandomRecipeList = () => {
        let recipes = [];
        if(this.props.searchByIngredient.length > 0){
            recipes = [...this.props.searchByIngredient];
        } else {
            recipes = [...this.props.randomRecipes];
        }
        const recipeList = recipes.map(recipe => {
            if(this.props.recipeView === 'list'){
                return <SingleRecipeInline key={recipe.id} recipe={recipe}/>
            } else {
                return <SingleRecipeCard key={recipe.id} recipe={recipe}/>
            }

        });
        return recipeList;
    }

    render() {
        return <div>
            <Filter
                searchByIngredientAction={this.props.searchByIngredientAction}
                changeViewAction={this.props.changeViewAction}
                recipeView={this.props.recipeView}
            />
            <div className="container recipe-container">
                <div className="row recipe-row">
                    {this.getRandomRecipeList()}
                </div>
            </div>
        </div>
    }
}

const mapStateToProps = state => {
    return {
        randomRecipes: state.randomRecipes,
        recipeView: state.recipeView,
        searchByIngredient: state.searchByIngredient
    }
};


const mapStateToDispatch = dispatch => {
    return bindActionCreators({
        setRandomRecipes: actions.setRandomRecipes,
        getRandomRecipes: actions.getRandomRecipes,
        changeViewAction: actions.changeViewAction,
        searchByIngredientAction: actions.searchByIngredientAction
    }, dispatch)
};

export default connect(mapStateToProps, mapStateToDispatch)(RandomRecipes);