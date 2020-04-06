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
        // this.searchByIngredient = this.searchByIngredient.bind(this);
        // this.getRandomRecipeList = this.getRandomRecipeList.bind(this);
    }

    componentDidMount() {
        this.props.getRandomRecipes();

    }

    // toggleFavoriteRecipe = recipe => {
    //     const recipeIndex = this.props.favoriteRecipes.findIndex(el => el.id === recipe.id);
    //
    //     if(recipeIndex !== -1){
    //         this.props.removeFavoriteRecipe(recipeIndex);
    //     }else{
    //         this.props.addFavoriteRecipe(recipe);
    //     }
    //     console.log(this.props.favoriteRecipes)
    // }

    // getActiveClass = recipe => {
    //     if(this.props.favoriteRecipes.findIndex(el => el.id === recipe.id) !== -1){
    //         return "active"
    //     }
    //     return ""
    // }

    getRandomRecipeList = () => {
        console.log(this.props);
        console.log(this.props.searchByIngredient.length);
        let recipes = [];
        if(this.props.searchByIngredient.length > 0){
            recipes = [...this.props.searchByIngredient];
        } else {
            recipes = [...this.props.randomRecipes];
        }
        const recipeList = recipes.map(recipe => {
            console.log(recipe);
            if(this.props.recipeView === 'list'){
                return <SingleRecipeInline key={recipe.id} recipe={recipe}/>
            } else {
                return <SingleRecipeCard key={recipe.id} recipe={recipe}/>
            }

        })
        return recipeList;
        // return [];

    }

    render() {
        console.log(this.props);
        return <div>
            <Filter searchByIngredientAction={this.props.searchByIngredientAction} changeViewAction={this.props.changeViewAction}/>
            <div className="container recipe-container">
                <div className="row recipe-row" /*style="margin-top:30px;"*/>
                    {this.getRandomRecipeList()}
                    {/*test*/}
                </div>
            </div>
        </div>
    }
}

const mapStateToProps = state => {
    console.log(state);
    return {
        randomRecipes: state.randomRecipes,
        recipeView: state.recipeView,
        searchByIngredient: state.searchByIngredient
        // favoriteRecipes: state.favoriteRecipes
    }
};


const mapStateToDispatch = dispatch => {
    return bindActionCreators({
        setRandomRecipes: actions.setRandomRecipes,
        getRandomRecipes: actions.getRandomRecipes,
        changeViewAction: actions.changeViewAction,
        searchByIngredientAction: actions.searchByIngredientAction,
        // addFavoriteRecipe: actions.addFavoriteRecipe,
        // removeFavoriteRecipe: actions.removeFavoriteRecipe
    }, dispatch)
};

export default connect(mapStateToProps, mapStateToDispatch)(RandomRecipes);