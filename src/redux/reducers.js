import {combineReducers} from "redux";
import types from './action-types';
import {firestoreReducer} from "redux-firestore";
import {firebaseReducer} from "react-redux-firebase";

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

function recipeView(state = 'list', action) {
    switch (action.type) {
        case types.RECIPE_VIEW: {
            return action.payload;
        }

        default:
            return state;
    }
}

function searchByIngredient(state = [], action) {
    switch (action.type) {
        case types.SEARCH_BY_INGREDIENT: {
            console.log(action.payload);
            return [...action.payload];
        }
        default:
            return state;
    }
}

function randomFoodTrivia(state = '', action) {
    switch (action.type) {
        case types.SET_RANDOM_FOOD_TRIVIA: {
            // console.log(action.payload);
            return action.payload;
        }
        default:
            return state;
    }
}

function randomFoodJoke(state = '', action) {
    switch (action.type) {
        case types.SET_RANDOM_FOOD_JOKE: {
            // console.log(action.payload);
            return action.payload;
        }
        default:
            return state;
    }
}

function register(state = {}, action) {
    switch(action.type) {
        case types.REGISTER_USER_SUCCESS:
            return {...action.payload};
        case types.REGISTER_USER_ERROR:
            return {...action.payload};
        default:
            return state;
    }
}

function login(state = {}, action) {
    switch(action.type) {
        case types.LOGIN_USER_SUCCESS:
            return {...action.payload};
        case types.LOGIN_USER_ERROR:
            return {...action.payload};
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
    recipeDetails,
    recipeView,
    searchByIngredient,
    randomFoodTrivia,
    randomFoodJoke,
    register,
    login
});