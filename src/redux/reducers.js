import {combineReducers} from "redux";
import types from './action-types';

function randomRecipes(state = [], action) {
    switch (action.type) {
        case types.SET_RANDOM_RECIPES: {
            // console.log(action.payload);
            return [...action.payload];
        }
        default:
            return state;
    }
}

function recipeDetails(state = {}, action) {
    switch (action.type) {
        case types.SET_RECIPE_DETAILS: {
            return {...action.payload};
        }

        default:
            return state;
    }
}

function error(state = {}, action) {
    switch (action.type) {
        case types.SET_ERROR: {
            return {...action.payload};
        }
        default:
            return state;
    }
}

// function favoriteRecipes(state=[], action){
//     switch (action.type) {
//         case types.ADD_FAVORITE_RECIPE: {
//             return [...state, action.payload];
//         }
//         case types.REMOVE_FAVORITE_RECIPE: {
//             state.splice(action.payload, 1)
//             return [...state];
//         }
//         default:
//             return state;
//     }
// }

export default combineReducers({
    randomRecipes,
    error,
    recipeDetails
    // favoriteRecipes
});