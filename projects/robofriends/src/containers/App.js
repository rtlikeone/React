import React, { Component } from "react";
// import { robots } from "../data/robots";
import SearcBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";
import CardList from "../components/CardList";

class App extends Component {
	constructor() {
		super();
		this.state = {
			robots: [],
			searchField: "",
		};

		this.onSearchChange = this.onSearchChange.bind(this);
		// console.log("Constructor");
	}

	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/users/")
			.then((response) => response.json())
			.then((data) => this.setState({ robots: data }));

		// console.log(`componentDidMount: ${this.state.robots}`);
	}

	onSearchChange(event) {
		// Update this.state.searchField
		this.setState({ searchField: event.target.value });
	}

	render() {
		// console.log("render");
		// console.log(`render: ${this.state.robots}`);

		const filteredRobots = this.state.robots.filter((robot) => {
			return robot.name
				.toLowerCase()
				.includes(this.state.searchField.toLowerCase());
		});
		if (!this.state.robots.length) {
			return <h1>Loading</h1>;
		} else {
			return (
				<React.Fragment>
					<SearcBox searchChange={this.onSearchChange} />
					<Scroll>
						<ErrorBoundry>
							<CardList robots={filteredRobots} />
						</ErrorBoundry>
					</Scroll>
				</React.Fragment>
			);
		}
	}
}

export default App;
