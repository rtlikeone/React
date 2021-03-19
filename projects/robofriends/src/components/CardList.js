import Card from "./Card";

function CardList({ robots }) {
	// if (true) {
	// 	throw new Error("Something went wrong...");
	// }
	return (
		<div className="container">
			{robots.map((robot) => {
				return (
					<Card
						key={robot.id}
						image={robot.id}
						name={robot.name}
						email={robot.email}
					/>
				);
			})}
		</div>
	);
}

export default CardList;
