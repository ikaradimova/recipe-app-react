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
        const url = `${baseUrl}random?number=${numberOfRecipes}&apiKey=${apiKey}`;
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
        const url = `${baseUrl}${id}/information?apiKey=${apiKey}`;
        const response = await networkClient.get(url);
        console.log(response);
        dispatch(setRecipeDetails(response));
    } catch(ex) {
        dispatch(setError({message: ex.message}))
    }
};