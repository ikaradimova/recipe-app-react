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
                    <div className="col-3 col-sm-2 col-xs-3">
                        <img src={recipe.image}
                             className="thumbnail img-responsive"
                             /*style="max-width: 14rem; max-height: 10rem;"*/
                        />
                    </div>
                    <div className="col-9 col-sm-7 col-xs-6" /*style="padding-left: 6rem;"*/>
                        <h4 className="list-title">{recipe.title}</h4>
                        <p className="list-text">{ReactHtmlParser(recipe.summary.substr(0, 400) + '...')}</p>
                        <Link to={`/recipe/${recipe.id}`} className="btn btn-primary">See recipe</Link>
                    </div>
                </div>
            </li>

        </ul>
    }
}

export default withRouter(SingleRecipeInline);