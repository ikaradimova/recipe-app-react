import React, {Component} from "react";
import constants from "../../constants";
import moment from "moment";
import {Link, withRouter} from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';

class SingleRecipeCard extends Component {

    // showMovieDetails = () => {
    //     this.props.history.push(`/moviedetails/${this.props.id}`);
    // }
    render() {
        const recipe = this.props.recipe;
        console.log(recipe);
        return <div className="card recipe-card col-4" /*style="display: none;"*/>
            <img className="card-img-top" src={recipe.image}
                 /*style="max-height: 12rem;"*/
                 alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">{recipe.title}</h5>
                    <p className="card-text">{ReactHtmlParser(recipe.summary.substr(0, 400) + '...')}</p>
                    <Link to={`/recipe/${recipe.id}`} className="btn btn-primary">See recipe</Link>
                </div>
        </div>
    }
}

export default withRouter(SingleRecipeCard);