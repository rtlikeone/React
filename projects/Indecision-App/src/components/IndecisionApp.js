import React, { Component, useState, useEffect } from "react";
import Header from "./Header";
import Action from "./Action";
import Options from "./Options";
import AddOption from "./AddOption";
import OptionModal from "./OptionModal";

function IndecisionApp(props) {
	const [options, setOptions] = useState([]);
	const [selectedOption, setSelectedOption] = useState(undefined);
	const title = "Indecision App";
	const subtitle = "Put your life in the hand of a computer";

	useEffect(() => {
		try {
			// getItem to fetch data from localStorage based on "keyname" and parse to save in array
			const json = localStorage.getItem("options");
			const options = JSON.parse(json);

			// Change state only if there are options in localStorage
			if (options) {
				setOptions(options);
			}
		} catch (e) {
			console.log(e);
		}

		if (options !== options) {
			// stringify data to store in localStorage with setItem
			const json = JSON.stringify(options);
			// "keyname" and value (setItem, 2 arguments)
			localStorage.setItem("options", json);
		}
	}, []);

	const handlePickOption = () => {
		const rand = Math.floor(Math.random() * this.state.options.length);
		const option = this.state.options[rand];

		setSelectedOption(option);
	};

	const handleClearSelectedOption = () => {
		setSelectedOption(undefined);
	};

	const handleAddOption = (option) => {
		if (!option) {
			return "Add new option to start!";
		} else if (options.indexOf(option) > -1) {
			return "You've already added this option!";
		}

		setOptions(options.concat(option));

		console.log(options);
	};

	const handleRemoveOption = (option) => {
		setOptions(options.filter((opt) => opt !== option));
	};

	const handleRemoveAll = () => {
		setOptions([]);
	};

	return (
		<div>
			<Header title={title} subtitle={subtitle} />
			<Action
				hasOptions={options.length > 0}
				handlePickOption={handlePickOption}
			/>
			<Options
				options={options}
				handleRemoveOption={handleRemoveOption}
				handleRemoveAll={handleRemoveAll}
			/>
			<AddOption handleAddOption={handleAddOption} />
			<OptionModal
				selectedOption={selectedOption}
				handleClearSelectedOption={handleClearSelectedOption}
			/>
		</div>
	);
}

// class IndecisionApp extends React.Component {
//   constructor() {
//     super();
//     this.handlePickOption = this.handlePickOption.bind(this);
//     this.handleAddOption = this.handleAddOption.bind(this);
//     this.handleRemoveOption = this.handleRemoveOption.bind(this);
//     this.handleRemoveAll = this.handleRemoveAll.bind(this);
//     this.handleClearSelectedOption = this.handleClearSelectedOption.bind(this);

//     this.state = {
//       options: [],
//       selectedOption: undefined,
//     };
//   }

//   componentDidMount() {
//     try {
//       // getItem to fetch data from localStorage based on "keyname" and parse to save in array
//       const json = localStorage.getItem("options");
//       const options = JSON.parse(json);

//       // Change state only if there are options in localStorage
//       if (options) {
//         this.setState({ options });
//       }
//     } catch (e) {
//       console.log(e);
//     }
//   }
//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.options !== this.state.options) {
//       // stringify data to store in localStorage with setItem
//       const json = JSON.stringify(this.state.options);
//       // "keyname" and value (setItem, 2 arguments)
//       localStorage.setItem("options", json);
//     }
//   }

//   handlePickOption() {
//     const rand = Math.floor(Math.random() * this.state.options.length);
//     const option = this.state.options[rand];

//     this.setState(() => ({
//       selectedOption: option,
//     }));
//   }

//   handleClearSelectedOption() {
//     this.setState(() => {
//       selectedOption: undefined;
//     });
//   }

//   handleAddOption(option) {
//     if (!option) {
//       return "Add new option to start!";
//     } else if (this.state.options.indexOf(option) > -1) {
//       return "You've already added this option!";
//     }

//     this.setState((prevState) => ({
//       options: prevState.options.concat(option),
//     }));

//     console.log(this.state.options);
//   }

//   handleRemoveOption(option) {
//     this.setState((prevState) => ({
//       options: prevState.options.filter((opt) => opt !== option),
//     }));
//   }

//   handleRemoveAll() {
//     this.setState(() => ({ options: [] }));
//   }

//   render() {
//     const title = "Indecision App";
//     const subtitle = "Put your life in the hand of a computer";

//     return (
//       <div>
//         <Header title={title} subtitle={subtitle} />
//         <Action
//           hasOptions={this.state.options.length > 0}
//           handlePickOption={this.handlePickOption}
//         />
//         <Options
//           options={this.state.options}
//           handleRemoveOption={this.handleRemoveOption}
//           handleRemoveAll={this.handleRemoveAll}
//         />
//         <AddOption handleAddOption={this.handleAddOption} />
//         <OptionModal
//           selectedOption={this.state.selectedOption}
//           handleClearSelectedOption={this.handleClearSelectedOption}
//         />
//       </div>
//     );
//   }
// }

export default IndecisionApp;
