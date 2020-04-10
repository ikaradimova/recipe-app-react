import types from './action-types';
import networkClient from '../network/network-client';
import constants from "../constants";
import {userService} from "../services/userService";

const apiKey = constants.apiKey;
const baseUrl = constants.baseURL;

export function setRandomRecipes(recipes) {
    return {type: types.SET_RANDOM_RECIPES, payload: recipes}
}

export function setError(error) {
    return {type: types.SET_ERROR, payload: error};
}

export const getRandomRecipes = () => async dispatch => {
    try {
        const numberOfRecipes = 12; //should be initially set to 12
        const url = `${baseUrl}recipes/random?number=${numberOfRecipes}&apiKey=${apiKey}`;
        const response = await networkClient.get(url);
        dispatch(setRandomRecipes(response.recipes));
    } catch (ex) {
        dispatch(setError({message: ex.message}))
    }
};

export function setRecipeDetails(recipe) {
    return {type: types.SET_RECIPE_DETAILS, payload: recipe}
}

export const getRecipeDetails = id => async dispatch => {
    try {
        const url = `${baseUrl}recipes/${id}/information?apiKey=${apiKey}`;
        const response = await networkClient.get(url);
        dispatch(setRecipeDetails(response));
    } catch (ex) {
        dispatch(setError({message: ex.message}))
    }
};

export const changeViewAction = (view) => {
    return {
        type: types.RECIPE_VIEW,
        payload: view
    }
};

export function setSearchByIngredientAction(recipes) {
    return {type: types.SEARCH_BY_INGREDIENT, payload: recipes}
}

export const searchByIngredientAction = ingredients => async dispatch => {
    try {
        ingredients = ingredients.replace(',', '').replace(' ', ',');
        const url = `${baseUrl}recipes/findByIngredients?ingredients=?${ingredients}&apiKey=${apiKey}`;
        const response = await networkClient.get(url);
        dispatch(setSearchByIngredientAction(response));
    } catch (ex) {
        dispatch(setError({message: ex.message}))
    }
};

export function setRandomFoodTrivia(trivia) {
    return {type: types.SET_RANDOM_FOOD_TRIVIA, payload: trivia}
}

export const getRandomFoodTrivia = () => async dispatch => {
    try {
        const url = `${baseUrl}food/trivia/random?apiKey=${apiKey}`;
        const response = await networkClient.get(url);
        dispatch(setRandomFoodTrivia(response));
    } catch (ex) {
        dispatch(setError({message: ex.message}))
    }
};

export function setRandomFoodJoke(joke) {
    return {type: types.SET_RANDOM_FOOD_JOKE, payload: joke}
}

export const getRandomFoodJoke = () => async dispatch => {
    try {
        const url = `${baseUrl}/food/jokes/random?apiKey=${apiKey}`;
        const response = await networkClient.get(url);
        dispatch(setRandomFoodJoke(response));
    } catch (ex) {
        dispatch(setError({message: ex.message}))
    }
};

function successLogin(user) {
    return {type: types.LOGIN_SUCCESS, user}
}

export function login(email, password) {
    return dispatch => {
        userService.login(email, password)
            .then(
                user => {
                    dispatch(successLogin(user));
                },
                error => {
                    dispatch(setError({messageLogin: error.toString()}))
                }
            );
    };
}

export function logout() {
    userService.logout();
    return {type: types.LOGOUT};
}

function successRegister(user) {
    return {type: types.REGISTER_SUCCESS, user}
}

export function register(user) {
    return dispatch => {
        userService.register(user)
            .then(
                user => {
                    dispatch(successRegister(user));
                },
                error => {
                    dispatch(setError({messageRegister: error.toString()}))
                }
            );
    };
}