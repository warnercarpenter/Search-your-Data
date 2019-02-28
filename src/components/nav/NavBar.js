import React, { Component } from "react"
import { Link } from "react-router-dom"
import { withRouter } from 'react-router'
import "bootstrap/dist/css/bootstrap.min.css"


class NavBar extends Component {

    searchHandler = (event) => {
        if (event.keyCode === 13) {

            const searchText = event.target.value

            event.target.value = ""

            const resultState = {}

            fetch("http://localhost:5002/employees")
                .then(r => r.json())
                .then(employees => resultState.searchedEmployees = employees.filter(employee => employee.name.includes(searchText)))
                .then(() => fetch("http://localhost:5002/locations")
                    .then(r => r.json()))
                .then(locations => resultState.searchedLocations = locations.filter(location => location.name.includes(searchText) || location.address.includes(searchText)))
                .then(() => fetch("http://localhost:5002/animals")
                    .then(r => r.json()))
                .then(animals => resultState.searchedAnimals = animals.filter(animal => animal.name.includes("searchText")))
                .then(() => {
                    this.props.history.push({
                        pathname: '/search',
                        resultState
                      })
                })

        }
    }

    render() {
        return (
            <nav className="navbar navbar-light fixed-top light-blue flex-md-nowrap p-0 shadow">
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Locations</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/animals">Animals</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/employees">Employees</Link>
                    </li>
                </ul>
                <input type="text" id="searchInput" onKeyUp={this.searchHandler} placeholder="Search"></input>
            </nav>
        )
    }
}

export default withRouter(NavBar)