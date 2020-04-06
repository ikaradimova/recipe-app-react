import React, {Component} from "react";
import constants from "../../constants";
import moment from "moment";
import {Link, withRouter} from 'react-router-dom';
import ReactHtmlParser from "react-html-parser";

class SingleRecipeInline extends Component {

    // showMovieDetails = () => {
    //     this.props.history.push(`/moviedetails/${this.props.id}`);
    // }
    render() {
        const recipe = this.props.recipe;
        console.log(recipe);
        return <ul className="list-group recipe-list-group" /*style="width: 100%;"*/>

            <li className="list-group-item recipe-list" /*style="display: none;"*/>
                <div className="row">
                    <div className="col-sm-6 col-12">
                        <img src={recipe.image}
                             className="img-thumbnail"
                             /*style="max-width: 14rem; max-height: 10rem;"*/
                        />
                    </div>
                    <div className="col-sm-6 col-12" /*style="padding-left: 6rem;"*/>
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