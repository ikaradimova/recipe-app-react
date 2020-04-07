import React, {Component} from "react";

class Filter extends Component {
    constructor(){
        super();
        this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    handleSearchSubmit(event){
        event.preventDefault();
        const searchValue = event.target.elements.search.value;
        console.log(searchValue);
        this.props.searchByIngredientAction(searchValue);
        event.target.elements.search.value = '';
    }

    onClick(view){
        this.props.changeViewAction(view);
    }

    render() {
        return <div className="container">
            <div className="row">
                <div className="col-10">
                    <form onSubmit={this.handleSearchSubmit}>
                        <div className="form-group">
                            <input
                                type="text"
                                id="search"
                                name="search"
                                className="form-control"
                                placeholder="Search by ingredients (separate them with a comma)"
                                onChange={this.handleChange}
                            />
                        </div>
                    </form>
                </div>
                <div className={`col filter-icon list-view ${this.props.recipeView === 'list' ? 'active' : ''}`}
                     onClick={() => this.onClick('list')}>
                    <i className="fa fa-list"></i>
                </div>
                <div className={`col filter-icon grid-view ${this.props.recipeView === 'grid' ? 'active' : ''}`}
                     onClick={() => this.onClick('grid')}>
                    <i className="fa fa-th-large"></i>
                </div>
            </div>
        </div>
    }
}

export default Filter;