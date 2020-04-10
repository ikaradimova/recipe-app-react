import {combineReducers} from "redux";
import types from './action-types';

function randomRecipes(state = [], action) {
    switch (action.type) {
        case types.SET_RANDOM_RECIPES: {
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
            return [...action.payload];
        }
        default:
            return state;
    }
}

function randomFoodTrivia(state = '', action) {
    switch (action.type) {
        case types.SET_RANDOM_FOOD_TRIVIA: {
            return action.payload;
        }
        default:
            return state;
    }
}

function randomFoodJoke(state = '', action) {
    switch (action.type) {
        case types.SET_RANDOM_FOOD_JOKE: {
            return action.payload;
        }
        default:
            return state;
    }
}

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : {};

export function authentication(state = initialState, action) {
    switch (action.type) {
        case types.LOGIN_SUCCESS:
            return {
                loggedIn: true,
                user: action.user
            };
        case types.LOGOUT:
            return {
                logout: true
            };
        default:
            return state
    }
}

export function registration(state = {}, action) {
    switch (action.type) {
        case types.REGISTER_SUCCESS:
            return { registering: 'success' };
        default:
            return state
    }
}

export default combineReducers({
    randomRecipes,
    error,
    recipeDetails,
    recipeView,
    searchByIngredient,
    randomFoodTrivia,
    randomFoodJoke,
    authentication,
    registration
});