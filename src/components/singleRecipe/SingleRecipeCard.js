import React, {Component} from "react";
import {Link, withRouter} from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';

class SingleRecipeCard extends Component {

    render() {
        const recipe = this.props.recipe;
        return <div className="card recipe-card col-4">
            <img className="card-img-top" src={recipe.image} alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">{recipe.title}</h5>
                    <p className="card-text">{recipe.summary ? ReactHtmlParser(recipe.summary.substr(0, 400) + '...') : ''}</p>
                    <Link to={`/recipe/${recipe.id}`} className="btn btn-primary">See recipe</Link>
                </div>
        </div>
    }
}

export default withRouter(SingleRecipeCard);