import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './animal/AnimalList'
import LocationList from './location/LocationList'
import EmployeeList from './employee/EmployeeList'
import SearchResults from './search/SearchResults'
import { withRouter } from 'react-router'


class ApplicationViews extends Component {

    state = {
        employees: [],
        locations: [],
        animals: [],
        searchedEmployees: [],
        searchedLocations: [],
        searchedAnimals: []
    }

    componentDidMount() {
        const newState = {}

        fetch("http://localhost:5002/employees")
            .then(r => r.json())
            .then(employees => newState.employees = employees)
            .then(() => fetch("http://localhost:5002/locations")
                .then(r => r.json()))
            .then(locations => newState.locations = locations)
            .then(() => fetch("http://localhost:5002/animals")
                .then(r => r.json()))
            .then(animals => newState.animals = animals)
            .then(() => this.setState(newState))
    }

    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <LocationList locations={this.state.locations} />
                }} />
                <Route exact path="/animals" render={(props) => {
                    return <AnimalList animals={this.state.animals} />
                }} />
                <Route exact path="/employees" render={(props) => {
                    return <EmployeeList employees={this.state.employees} />
                }} />
                <Route exact path="/search" render={(props) => {
                    return <SearchResults searchedEmployees={this.state.searchedEmployees} searchedLocations={this.state.searchedLocations} searchedAnimals={this.state.searchedAnimals} />
                }} />
            </React.Fragment>
        )
    }
}

export default withRouter(ApplicationViews)