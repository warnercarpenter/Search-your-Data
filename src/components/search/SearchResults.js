import React, { Component } from "react"
import { withRouter } from 'react-router'

class SearchResults extends Component {

    render() {

        return (
            <article id="searchResults">
                <section className="animals">
                    Animals:
            {
                        this.props.location.resultState.searchedAnimals.map(animal =>
                            <div key={animal.id}>
                                {animal.name}
                            </div>
                        )
                    }
                    <br />
                </section>
                <section className="employees">
                    Employees:
            {
                        this.props.location.resultState.searchedEmployees.map(employee =>
                            <div key={employee.id}>
                                {employee.name}
                            </div>
                        )
                    }
                    <br />
                </section>
                <section className="locations">
                    Addresses:
            {
                        this.props.location.resultState.searchedLocations.map(location =>
                            <div key={location.id}>
                                {location.name}: {location.address}
                            </div>
                        )
                    }
                    <br />
                </section>
            </article>
        )
    }
}

export default withRouter(SearchResults)