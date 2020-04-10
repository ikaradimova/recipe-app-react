import React, {Component} from "react";
import {Link, withRouter} from 'react-router-dom';
import ReactHtmlParser from "react-html-parser";

class SingleRecipeInline extends Component {

    render() {
        const recipe = this.props.recipe;
        return <ul className="list-group recipe-list-group">
            <li className="list-group-item recipe-list">
                <div className="row">
                    <div className="col-sm-6 col-12">
                        <img src={recipe.image} className="img-thumbnail" alt=""/>
                    </div>
                    <div className="col-sm-6 col-12">
                        <h4 className="list-title">{recipe.title}</h4>
                        <p className="list-text">{recipe.summary ? ReactHtmlParser(recipe.summary.substr(0, 400) + '...') : ''}</p>
                        <Link to={`/recipe/${recipe.id}`} className="btn btn-primary">See recipe</Link>
                    </div>
                </div>
            </li>
        </ul>
    }
}

export default withRouter(SingleRecipeInline);