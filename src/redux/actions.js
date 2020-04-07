import types from './action-types';
import networkClient from '../network/network-client';
import constants from "../constants";

const apiKey = constants.apiKey;
const baseUrl = constants.baseURL;

export function setRandomRecipes (recipes) {
    console.log(recipes);
    return {type: types.SET_RANDOM_RECIPES, payload: recipes}
}
export function setError (error) {
    return { type: types.SET_ERROR, payload: error };
}

export const getRandomRecipes = () => async dispatch => {
    try {
        const numberOfRecipes = 1; //should be initially set to 20
        const url = `${baseUrl}recipes/random?number=${numberOfRecipes}&apiKey=${apiKey}`;
        const response = await networkClient.get(url);
        console.log(response);
        dispatch(setRandomRecipes(response.recipes));
    } catch(ex) {
        dispatch(setError({message: ex.message}))
    }
};

export function setRecipeDetails (recipe) {
    return {type: types.SET_RECIPE_DETAILS, payload: recipe}
}

export const getRecipeDetails = id => async dispatch => {
    try {
        const url = `${baseUrl}recipes/${id}/information?apiKey=${apiKey}`;
        const response = await networkClient.get(url);
        console.log(response);
        dispatch(setRecipeDetails(response));
    } catch(ex) {
        dispatch(setError({message: ex.message}))
    }
};

export const changeViewAction = (view) => {
    return {
        type: types.RECIPE_VIEW,
        payload: view
    }
};

export function setSearchByIngredientAction (recipes) {
    return {type: types.SEARCH_BY_INGREDIENT, payload: recipes}
}

export const searchByIngredientAction = ingredients => async dispatch => {
    try {
        ingredients = ingredients.replace(',', '').replace(' ', ',');
        console.log(ingredients);
        const url = `${baseUrl}recipes/findByIngredients?ingredients=?${ingredients}&apiKey=${apiKey}`;
        console.log(url);
        const response = await networkClient.get(url);
        console.log(response);
        dispatch(setSearchByIngredientAction(response));
    } catch(ex) {
        dispatch(setError({message: ex.message}))
    }
};

export function setRandomFoodTrivia (trivia) {
    console.log(trivia);
    return {type: types.SET_RANDOM_FOOD_TRIVIA, payload: trivia}
}

export const getRandomFoodTrivia = () => async dispatch => {
    try {
        const url = `${baseUrl}food/trivia/random?apiKey=${apiKey}`;
        console.log(url);
        const response = await networkClient.get(url);
        console.log(response);
        dispatch(setRandomFoodTrivia(response));
    } catch(ex) {
        dispatch(setError({message: ex.message}))
    }
};

export function setRandomFoodJoke (joke) {
    console.log(joke);
    return {type: types.SET_RANDOM_FOOD_JOKE, payload: joke}
}

export const getRandomFoodJoke = () => async dispatch => {
    try {
        const url = `${baseUrl}/food/jokes/random?apiKey=${apiKey}`;
        console.log(url);
        const response = await networkClient.get(url);
        console.log(response);
        dispatch(setRandomFoodJoke(response));
    } catch(ex) {
        dispatch(setError({message: ex.message}))
    }
};

export const registerUserAction = (user) => {
    return {
        type: types.REGISTER_USER,
        payload: user
    }
};

export const loginUserAction = (user) => {
    return {
        type: types.LOGIN_USER,
        payload: user
    }
};