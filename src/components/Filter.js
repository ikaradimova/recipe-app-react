import React, {Component} from "react";

class Filter extends Component {
    render() {
        return <div className="container filter-container">
            <div className="row filter-row">
                <div className="col">
                    <div className="card">
                        <div className="card-header">Filters</div>
                        <div className="card-body">
                            <div className="row">
                                <div className="form-group col-4">
                                    <label>Ingredients</label>
                                    <input type="text"
                                           className="form-control filter filter-ingredient"
                                           placeholder="Insert ingredient"/>
                                </div>
                                <div className="form-group col-4">
                                    <label>Cuisines</label>
                                    <select className="form-control filter filter-cuisine">
                                        <option>All</option>
                                    </select>
                                </div>
                                <div className="form-group col-4">
                                    <label>Views</label>
                                    <select className="form-control filter filter-view">
                                        <option>Grid</option>
                                        <option>List</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    }
}

export default Filter;