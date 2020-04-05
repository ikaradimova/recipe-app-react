import React, {Component} from "react";
import RandomRecipes from "../components/RandomRecipes/RandomRecipes";

class Home extends Component {

    render() {
        return <div className="container">
            <RandomRecipes>

            </RandomRecipes>
        </div>
    }
}

export default Home;