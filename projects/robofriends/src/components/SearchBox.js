function SearchBox({ searchChange }) {
	return (
		<div className="searchBox">
			<input
				type="search"
				placeholder="Search robots"
				onChange={searchChange}
			/>
		</div>
	);
}

export default SearchBox;
